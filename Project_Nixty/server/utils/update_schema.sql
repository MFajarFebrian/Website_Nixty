-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  account_type ENUM('user', 'admin') DEFAULT 'user',
  google_id VARCHAR(255),
  profile_picture VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on google_id
CREATE INDEX IF NOT EXISTS idx_google_id ON users(google_id);

-- Insert a default admin user (password: admin123)
-- The password is hashed, this is just an example
INSERT INTO users (email, name, password, account_type)
VALUES ('admin@nixty.com', 'Admin User', '$2b$10$XeHYX9LlFiJBfcbg.jGX8uVVaul5mWBhYl2aHk8eQJKG9hSKwY1Mu', 'admin')
ON DUPLICATE KEY UPDATE id = id;

-- Insert a default regular user (password: user123)
INSERT INTO users (email, name, password, account_type)
VALUES ('user@nixty.com', 'Regular User', '$2b$10$4Ky.qdI2MvgvJCyYLIAJXeRbX5hSMZ9TBgUJMNf0DKOGhOHBVRMSe', 'user')
ON DUPLICATE KEY UPDATE id = id; 