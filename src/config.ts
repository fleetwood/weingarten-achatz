// Configuration for the application
import * as dotenv from 'dotenv';

// Load environment variables
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

export const config = {
  database: {
    url: process.env.POSTGRES_URL || '',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    port: Number(process.env.POSTGRES_PORT || 5432),
    name: process.env.POSTGRES_DATABASE || 'weingarten-achatz',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    schema: process.env.POSTGRES_SCHEMA || 'dev',
  },
  clerk: {
    publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',
    secretKey: process.env.CLERK_SECRET_KEY || '',
    // webhookSecret: process.env.CLERK_WEBHOOK_SECRET || '',
  },
};
