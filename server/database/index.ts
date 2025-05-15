import mysql from 'mysql2/promise'
import { drizzle } from 'drizzle-orm/mysql2'

// Create connection pool using environment variables
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'office365_store',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Create drizzle instance
export const db = drizzle(pool)

// Re-export the schema
export * from './schema' 