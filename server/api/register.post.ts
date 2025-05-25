import { H3Event } from 'h3';
import { defineEventHandler, readBody } from 'h3';
import bcrypt from 'bcryptjs';
import pool from '../utils/db';

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { email, password, name } = await readBody(event);
    
    // Input validation
    if (!email || !password) {
      return {
        success: false,
        message: 'Email and password are required'
      };
    }
    
    // Check if user already exists
    const [existingUsers] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    if ((existingUsers as any[]).length > 0) {
      return {
        success: false,
        message: 'Email already in use'
      };
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user
    const [result] = await pool.query(
      'INSERT INTO users (email, password, name, account_type) VALUES (?, ?, ?, ?)',
      [email, hashedPassword, name || null, 'user']
    );
    
    const userId = (result as any).insertId;
    
    return {
      success: true,
      message: 'Registration successful',
      user: {
        id: userId,
        email,
        name,
        account_type: 'user',
        created_at: new Date()
      }
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'An error occurred during registration'
    };
  }
}); 