import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

// Load environment variables
export function CLI_ENV() {
  const env = process.env.NODE_ENV || 'development';
  dotenv.config({ path: `.env.${env}` });
}

// Make sure environment variables are loaded
CLI_ENV();

export default defineConfig({
  schema: './src/db/schema/*',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  }
});
