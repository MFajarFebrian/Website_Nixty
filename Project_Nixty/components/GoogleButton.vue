<template>
  <button @click="handleGoogleAuth" class="google-button" :disabled="isLoading">
    <span class="google-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
      </svg>
    </span>
    {{ buttonText }}
  </button>
  <div v-if="errorState" class="error-message">
    {{ errorMessage }} <a href="#" @click.prevent="handleGoogleAuth">Try again</a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGoogleAuth } from '../composables/useGoogleAuth';

const props = defineProps<{
  buttonText: string;
  authType: 'login' | 'register';
}>();

interface ServerResponse {
  success: boolean;
  message: string;
  user?: any;
}

const emit = defineEmits(['google-auth-success', 'google-auth-error']);
const isLoading = ref(false);
const errorState = ref(false);
const errorMessage = ref('');

// Get Google OAuth client ID from composable
const { GOOGLE_CLIENT_ID } = useGoogleAuth();
let googleAuth: TokenClient | null = null;

onMounted(() => {
  // Load the Google API script
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = initializeGoogleAuth;
    script.onerror = () => {
      errorState.value = true;
      errorMessage.value = 'Failed to load Google authentication. Please check your internet connection.';
    };
  }
});

const initializeGoogleAuth = () => {
  if (typeof window !== 'undefined' && window.google) {
    googleAuth = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'email profile',
      callback: handleGoogleResponse,
      error_callback: handleGoogleError
    });
  }
};

const handleGoogleError = (error: any) => {
  console.error('Google OAuth error:', error);
  isLoading.value = false;
  errorState.value = true;
  errorMessage.value = 'Google authentication failed. Please try again.';
  emit('google-auth-error', 'Google authentication failed');
};

const handleGoogleAuth = async () => {
  // Reset error state when trying again
  errorState.value = false;
  errorMessage.value = '';
  
  if (!googleAuth) {
    errorState.value = true;
    errorMessage.value = 'Google authentication not initialized. Please refresh the page and try again.';
    emit('google-auth-error', 'Google authentication not initialized');
    return;
  }

  isLoading.value = true;
  
  try {
    googleAuth.requestAccessToken();
  } catch (error) {
    console.error('Error requesting access token:', error);
    isLoading.value = false;
    errorState.value = true;
    errorMessage.value = 'Failed to start Google authentication. Please try again.';
  }
};

const handleGoogleResponse = async (response: TokenResponse) => {
  try {
    if (response.error) {
      if (response.error === 'popup_closed_by_user') {
        errorState.value = true;
        errorMessage.value = 'Google sign-in was cancelled. Please try again.';
      } else {
        errorState.value = true;
        errorMessage.value = `Google authentication error: ${response.error}`;
      }
      emit('google-auth-error', response.error);
      isLoading.value = false;
      return;
    }

    // Get user info from Google
    const accessToken = response.access_token;
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const googleUser = await userInfoResponse.json() as GoogleUserInfo;

    // Send the Google user data to our backend
    const serverResponse = await $fetch<ServerResponse>(`/api/auth/google-${props.authType}`, {
      method: 'POST',
      body: {
        email: googleUser.email,
        name: googleUser.name,
        google_id: googleUser.sub,
        picture: googleUser.picture
      }
    });

    if (serverResponse.success && serverResponse.user) {
      emit('google-auth-success', serverResponse.user);
    } else {
      errorState.value = true;
      errorMessage.value = serverResponse.message || 'Authentication failed on the server.';
      emit('google-auth-error', serverResponse.message);
    }
  } catch (error) {
    console.error('Google authentication error:', error);
    errorState.value = true;
    errorMessage.value = 'Failed to authenticate with Google. Please try again.';
    emit('google-auth-error', 'Failed to authenticate with Google');
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: white;
  color: #757575;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.google-button:hover:not(:disabled) {
  background-color: #f8f8f8;
}

.google-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.google-icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.error-message {
  margin-top: 10px;
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
}

.error-message a {
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
}

.error-message a:hover {
  text-decoration: underline;
}
</style> 