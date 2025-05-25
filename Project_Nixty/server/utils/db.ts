import mysql from 'mysql2/promise';
import { useRuntimeConfig } from '#imports';

// Create a connection pool using runtime config
const config = useRuntimeConfig();
const pool = mysql.createPool({
  host: config.mysql?.host || process.env.MYSQL_HOST || 'localhost',
  user: config.mysql?.user || process.env.MYSQL_USER || 'root',
  password: config.mysql?.password || process.env.MYSQL_PASSWORD || '',
  database: config.mysql?.database || process.env.MYSQL_DATABASE || 'nixty',
  port: parseInt(config.mysql?.port || process.env.MYSQL_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool; 