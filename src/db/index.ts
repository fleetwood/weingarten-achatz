import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import { config } from '../config';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: config.database.url,
  connectionTimeoutMillis: 5000,
});

// Create and export the Drizzle ORM instance
export const db = drizzle(pool, { schema });
