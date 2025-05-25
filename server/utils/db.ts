import mysql from 'mysql2/promise';

// Create a connection pool using environment variables if available
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'nixty',
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool; 