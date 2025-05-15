import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Get JWT secret from environment or use a default one
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Hash password
export async function hashPassword(password) {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Error securing password');
  }
}

// Compare password with hash
export async function comparePassword(password, hash) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error('Error comparing password:', error);
    return false;
  }
}

// Generate JWT token
export function generateToken(user) {
  // Remove sensitive data
  const userData = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };
  
  return jwt.sign(userData, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Authentication middleware
export function authenticate(event) {
  const authHeader = getRequestHeader(event, 'authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Authentication required'
    });
  }
  
  const token = authHeader.substring(7); // Remove 'Bearer ' prefix
  const user = verifyToken(token);
  
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid or expired token'
    });
  }
  
  // Add user to context
  event.context.user = user;
  
  return user;
}

// Role-based authorization middleware
export function authorize(roles = []) {
  return (event) => {
    const user = authenticate(event);
    
    if (roles.length && !roles.includes(user.role)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Forbidden',
        message: 'Insufficient permissions'
      });
    }
    
    return user;
  };
} 