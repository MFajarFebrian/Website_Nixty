# Google OAuth Setup Guide

This guide will walk you through setting up Google OAuth for your Nixty application.

## 1. Database Setup

Before using Google OAuth, you need to update your database schema to include the necessary fields:

1. Open phpMyAdmin (usually at http://localhost/phpmyadmin if using XAMPP)
2. Select your `nixty_db` database
3. Go to the "SQL" tab
4. Copy and paste the contents of `google_auth_fields.sql` file
5. Click "Go" to execute the SQL

## 2. Google Cloud Console Setup

### Create a Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top of the page
3. Click "New Project"
4. Enter a name for your project (e.g., "Nixty")
5. Click "Create"

### Enable the Google OAuth API

1. Select your project
2. Go to "APIs & Services" > "Library"
3. Search for "Google OAuth"
4. Enable the "Google OAuth2 API"

### Create OAuth Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the consent screen:
   - User Type: External
   - App name: Nixty
   - User support email: Your email
   - Developer contact information: Your email
   - Click "Save and Continue" through the remaining steps
   - Click "Back to Dashboard"

4. Return to "APIs & Services" > "Credentials"
5. Click "Create Credentials" > "OAuth client ID"
6. Application type: Web application
7. Name: Nixty Web Client
8. Authorized JavaScript origins:
   - http://localhost:3000 (for development)
   - https://your-production-domain.com (for production)
9. Authorized redirect URIs:
   - http://localhost:3000 (for development)
   - https://your-production-domain.com (for production)
10. Click "Create"

11. You'll see your Client ID and Client Secret. Copy the Client ID.

## 3. Configure Your Application

1. Open `composables/useGoogleAuth.ts`
2. Replace the existing client ID with your own:

```typescript
export function useGoogleAuth() {
  const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID_HERE'; // Replace with your client ID
  
  return {
    GOOGLE_CLIENT_ID
  };
}
```

## 4. Testing Google OAuth

1. Start your application with `npm run dev`
2. Go to the login page
3. Click "Continue with Google"
4. You should be prompted to select a Google account
5. After selecting an account, you should be logged in and redirected to the dashboard

## Troubleshooting

### "Popup Closed By User" Error

If you get this error, it may be because:
- Pop-ups are blocked in your browser
- The Google API hasn't been properly initialized

Solution:
- Allow pop-ups for your application domain
- Check the browser console for more specific errors

### "Invalid Client" Error

If you get this error, it may be because:
- The client ID is incorrect
- The authorized JavaScript origins don't match your current URL

Solution:
- Double-check your client ID
- Make sure the URL you're testing from is listed in the authorized JavaScript origins

### Other Issues

If you encounter other issues:
1. Check the browser console for errors
2. Verify that the Google OAuth API is enabled in your Google Cloud Console
3. Make sure your consent screen is properly configured 