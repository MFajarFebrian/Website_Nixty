@echo off
echo Setting up nixty database...

REM Create database if it doesn't exist
"C:\xampp\mysql\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS nixty;"

REM Create users table
"C:\xampp\mysql\bin\mysql.exe" -u root nixty -e "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) NOT NULL UNIQUE, name VARCHAR(255), password VARCHAR(255) NOT NULL, account_type ENUM('user', 'admin') DEFAULT 'user', google_id VARCHAR(255), profile_picture VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"

REM Create index on google_id
"C:\xampp\mysql\bin\mysql.exe" -u root nixty -e "CREATE INDEX IF NOT EXISTS idx_google_id ON users(google_id);"

REM Insert default admin user
"C:\xampp\mysql\bin\mysql.exe" -u root nixty -e "INSERT INTO users (email, name, password, account_type) VALUES ('admin@nixty.com', 'Admin User', '$2b$10$XeHYX9LlFiJBfcbg.jGX8uVVaul5mWBhYl2aHk8eQJKG9hSKwY1Mu', 'admin') ON DUPLICATE KEY UPDATE id = id;"

REM Insert default regular user
"C:\xampp\mysql\bin\mysql.exe" -u root nixty -e "INSERT INTO users (email, name, password, account_type) VALUES ('user@nixty.com', 'Regular User', '$2b$10$4Ky.qdI2MvgvJCyYLIAJXeRbX5hSMZ9TBgUJMNf0DKOGhOHBVRMSe', 'user') ON DUPLICATE KEY UPDATE id = id;"

echo Database setup complete!
echo Default users created:
echo - Admin: admin@nixty.com (password: admin123)
echo - User: user@nixty.com (password: user123)

pause 