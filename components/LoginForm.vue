<template>
  <div class="login-container">
    <h2>Login</h2>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
    
    <div class="separator">
      <span>OR</span>
    </div>
    
    <GoogleButton 
      button-text="Continue with Google" 
      auth-type="login"
      @google-auth-success="handleGoogleAuthSuccess"
      @google-auth-error="handleGoogleAuthError"
    />
    
    <div v-if="loggedInUser" class="user-info">
      <h3>Welcome, {{ loggedInUser.name }}!</h3>
      <p>You are now logged in as {{ loggedInUser.account_type }}.</p>
    </div>
    <div class="register-link">
      Don't have an account? <NuxtLink to="/register">Register</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

// Define types for our data
interface User {
  id: number;
  email: string;
  name: string | null;
  account_type: 'user' | 'admin';
  created_at: string;
  google_id?: string;
  profile_picture?: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;
}

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const isLoading = ref(false);
const router = useRouter();
const { user: loggedInUser, setUser } = useAuth();

// Clear error message when user starts typing again
watch([email, password], () => {
  if (errorMessage.value) {
    errorMessage.value = '';
  }
});

const handleLogin = async () => {
  try {
    // Clear previous messages
    errorMessage.value = '';
    successMessage.value = '';
    isLoading.value = true;
    
    // Make API call to the backend
    const response = await $fetch<LoginResponse>('/api/login', {
      method: 'POST',
      body: { 
        email: email.value, 
        password: password.value 
      }
    });
    
    if (response.success && response.user) {
      // Handle successful login
      successMessage.value = response.message;
      
      // Update the shared user state
      setUser(response.user);
      
      // Clear form
      email.value = '';
      password.value = '';
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } else {
      // Handle login error
      errorMessage.value = response.message || 'Login failed';
    }
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = 'An error occurred during login';
  } finally {
    isLoading.value = false;
  }
};

const handleGoogleAuthSuccess = (user: User) => {
  // Handle successful Google login
  successMessage.value = 'Google login successful';
  
  // Update the shared user state
  setUser(user);
  
  // Redirect to dashboard after a short delay
  setTimeout(() => {
    router.push('/dashboard');
  }, 1000);
};

const handleGoogleAuthError = (message: string) => {
  // Don't set error message here as the GoogleButton component now handles its own error display
  console.error('Google login error:', message);
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.separator span {
  padding: 0 10px;
  color: #777;
  font-size: 14px;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  text-align: center;
}

.success-message {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  text-align: center;
}

.user-info {
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  background-color: #e8f4ff;
  border-radius: 4px;
}

.register-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.register-link a {
  color: #007bff;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style> 