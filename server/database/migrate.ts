import mysql from 'mysql2/promise'
import * as schema from './schema'

// This script initializes the database with the required tables
async function main() {
  console.log('Starting database migration...')
  
  try {
    // First, create the database if it doesn't exist
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
    })
    
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQL_DATABASE || 'office365_store'}\``)
    
    // Connect to the database
    await connection.changeUser({
      database: process.env.MYSQL_DATABASE || 'office365_store'
    })
    
    // Create tables based on the schema
    console.log('Creating tables...')
    
    // Users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        role ENUM('admin', 'customer') NOT NULL DEFAULT 'customer',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    
    // Products table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        image_url VARCHAR(255),
        stock INT NOT NULL DEFAULT 0,
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        category VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    
    // Orders table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        status ENUM('pending', 'processing', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
        total DECIMAL(10, 2) NOT NULL,
        address TEXT,
        payment_method VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `)
    
    // Order Items table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
      )
    `)
    
    // Carts table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS carts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        session_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `)
    
    // Cart Items table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        cart_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (cart_id) REFERENCES carts(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
      )
    `)
    
    // Categories table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)
    
    // Insert default admin user
    await connection.execute(`
      INSERT INTO users (email, password, name, role)
      SELECT 'admin@example.com', '$2b$10$J3Cb97K9A2MuBNWP1qUqdeVlBkBMf6.7Iow4JIvUwxhG9Y7o9JoLq', 'Admin User', 'admin'
      WHERE NOT EXISTS (SELECT * FROM users WHERE email = 'admin@example.com')
    `)
    
    // Insert sample product categories
    await connection.execute(`
      INSERT INTO categories (name, description)
      SELECT 'Office 365 Business', 'Business plans for organizations'
      WHERE NOT EXISTS (SELECT * FROM categories WHERE name = 'Office 365 Business')
    `)
    
    await connection.execute(`
      INSERT INTO categories (name, description)
      SELECT 'Office 365 Personal', 'Personal plans for individuals'
      WHERE NOT EXISTS (SELECT * FROM categories WHERE name = 'Office 365 Personal')
    `)
    
    await connection.execute(`
      INSERT INTO categories (name, description)
      SELECT 'Office 365 Enterprise', 'Enterprise plans for large organizations'
      WHERE NOT EXISTS (SELECT * FROM categories WHERE name = 'Office 365 Enterprise')
    `)
    
    // Insert sample products
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 Business Basic', 'Web versions of Office apps, email, and cloud storage', 6.00, 100, 'Office 365 Business'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 Business Basic')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 Business Standard', 'Desktop and web versions of Office apps with email and cloud storage', 12.50, 100, 'Office 365 Business'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 Business Standard')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 Business Premium', 'Everything in Business Standard plus advanced security', 22.00, 100, 'Office 365 Business'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 Business Premium')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 Personal', 'For 1 person across multiple devices', 6.99, 100, 'Office 365 Personal'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 Personal')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 Family', 'For up to 6 people across multiple devices', 9.99, 100, 'Office 365 Personal'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 Family')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 E1', 'Basic business services for running your business', 10.00, 100, 'Office 365 Enterprise'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 E1')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 E3', 'Complete business services for collaboration and productivity', 23.00, 100, 'Office 365 Enterprise'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 E3')
    `)
    
    await connection.execute(`
      INSERT INTO products (name, description, price, stock, category)
      SELECT 'Office 365 E5', 'Advanced security, analytics, and voice capabilities', 38.00, 100, 'Office 365 Enterprise'
      WHERE NOT EXISTS (SELECT * FROM products WHERE name = 'Office 365 E5')
    `)
    
    console.log('Database migration completed successfully!')
    
    await connection.end()
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}

// Run the migration
main() 