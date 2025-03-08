import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import { db } from '@/db';
import { eq } from 'drizzle-orm';
import users from '@/db/schema/users';

export async function POST(req: Request) {
  // Get the request headers
  const headersList = req.headers;
  
  // Extract the headers we need for verification
  const svix_id = headersList.get('svix-id');
  const svix_timestamp = headersList.get('svix-timestamp');
  const svix_signature = headersList.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Get the webhook secret from environment variables
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    return new Response('Error: Missing webhook secret', {
      status: 500,
    });
  }

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  // Verify the webhook payload
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = evt.data;
    const email = email_addresses[0]?.email_address;
    const name = [first_name, last_name].filter(Boolean).join(' ');

    if (!email) {
      return new Response('Error: No email found in user data', {
        status: 400,
      });
    }

    try {
      // Check if user exists
      const existingUser = await db.select().from(users).where(eq(users.clerkId, id)).limit(1);

      if (existingUser.length > 0) {
        // Update existing user
        await db.update(users)
          .set({
            email,
            name: name || null,
            updatedAt: new Date(),
          })
          .where(eq(users.clerkId, id));
      } else {
        // Create new user
        await db.insert(users).values({
          clerkId: id,
          email,
          name: name || null,
        });
      }

      return new Response('User synchronized successfully', { status: 200 });
    } catch (error) {
      console.error('Error syncing user to database:', error);
      return new Response('Error syncing user to database', { status: 500 });
    }
  }

  return new Response('Webhook received', { status: 200 });
}
