-- Add Google authentication fields to the users table
ALTER TABLE users
ADD COLUMN google_id VARCHAR(255) NULL,
ADD COLUMN profile_picture VARCHAR(255) NULL;

-- Create an index on google_id for faster lookups
CREATE INDEX idx_google_id ON users(google_id); 