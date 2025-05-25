import pool from '../utils/db';
import { H3Event } from 'h3';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Get request body
    const { email, password, name } = await readBody(event);
    
    // Validate input
    if (!email || !password) {
      return {
        success: false,
        message: 'Email and password are required'
      };
    }
    
    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT id FROM users WHERE email = ?',
      [email]
    );
    
    if ((existingUsers as any[]).length > 0) {
      return {
        success: false,
        message: 'User with this email already exists'
      };
    }
    
    // Hash the password using bcrypt (salt rounds = 10)
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert the new user with hashed password
    // Note: account_type defaults to 'user' as defined in the database schema
    const [result] = await pool.execute(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [email, hashedPassword, name || null]
    );
    
    const insertResult = result as any;
    
    // Get the newly created user (without password)
    const [newUsers] = await pool.execute(
      'SELECT id, email, name, account_type, created_at FROM users WHERE id = ?',
      [insertResult.insertId]
    );
    
    const newUser = (newUsers as any[])[0];
    
    return {
      success: true,
      message: 'Registration successful',
      user: newUser
    };
    
  } catch (error) {
    console.error('Registration error:', error);
    
    return {
      success: false,
      message: 'An error occurred during registration'
    };
  }
}); 