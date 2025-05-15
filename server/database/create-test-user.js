import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

async function createTestUser() {
  try {
    console.log('Creating test user...');
    
    // Test user details
    const user = {
      email: 'test@example.com',
      password: 'test123',
      name: 'Test User',
      role: 'customer'
    };
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    
    // Connect to the database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      port: process.env.MYSQL_PORT || 3306,
      database: process.env.MYSQL_DATABASE || 'office365_store'
    });
    
    // Check if user exists
    const [existingUser] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [user.email]
    );
    
    if (existingUser.length > 0) {
      console.log('Test user already exists. Updating password...');
      
      // Update the existing user
      await connection.execute(
        'UPDATE users SET password = ? WHERE email = ?',
        [hashedPassword, user.email]
      );
      
      console.log('Test user password updated.');
    } else {
      console.log('Creating new test user...');
      
      // Insert the new user
      await connection.execute(
        'INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)',
        [user.email, hashedPassword, user.name, user.role]
      );
      
      console.log('Test user created successfully!');
    }
    
    // Verify the user
    const [users] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [user.email]
    );
    
    if (users.length > 0) {
      console.log('Test user details:');
      console.log('- ID:', users[0].id);
      console.log('- Email:', users[0].email);
      console.log('- Name:', users[0].name);
      console.log('- Role:', users[0].role);
      console.log('- Password (plaintext):', user.password);
    }
    
    await connection.end();
    console.log('Done!');
  } catch (error) {
    console.error('Error creating test user:', error);
  }
}

// Run the function
createTestUser(); 