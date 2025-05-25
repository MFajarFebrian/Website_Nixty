<template>
  <div class="register-container">
    <h2>Create Account</h2>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Creating Account...' : 'Register' }}
      </button>
    </form>
    
    <div class="separator">
      <span>OR</span>
    </div>
    
    <GoogleButton 
      button-text="Sign up with Google" 
      auth-type="register"
      @google-auth-success="handleGoogleAuthSuccess"
      @google-auth-error="handleGoogleAuthError"
    />
    
    <div class="login-link">
      Already have an account? <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
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

interface RegisterResponse {
  success: boolean;
  message: string;
  user?: User;
}

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const isLoading = ref(false);

const router = useRouter();
const { setUser } = useAuth();

// Clear error message when user starts typing again
watch([name, email, password, confirmPassword], () => {
  if (errorMessage.value) {
    errorMessage.value = '';
  }
});

const handleRegister = async () => {
  try {
    // Clear previous messages
    errorMessage.value = '';
    successMessage.value = '';
    
    // Validate passwords match
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Passwords do not match';
      return;
    }
    
    // Validate password strength (minimum 8 characters)
    if (password.value.length < 8) {
      errorMessage.value = 'Password must be at least 8 characters long';
      return;
    }
    
    isLoading.value = true;
    
    // Make API call to register
    const response = await $fetch<RegisterResponse>('/api/register', {
      method: 'POST',
      body: { 
        name: name.value,
        email: email.value, 
        password: password.value 
      }
    });
    
    if (response.success) {
      // Handle successful registration
      successMessage.value = response.message;
      
      // Clear form
      name.value = '';
      email.value = '';
      password.value = '';
      confirmPassword.value = '';
      
      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      // Handle registration error
      errorMessage.value = response.message || 'Registration failed';
    }
  } catch (error) {
    console.error('Registration error:', error);
    errorMessage.value = 'An error occurred during registration';
  } finally {
    isLoading.value = false;
  }
};

const handleGoogleAuthSuccess = (user: User) => {
  // Handle successful Google registration
  successMessage.value = 'Google registration successful';
  
  // Set the user in our auth system
  setUser(user);
  
  // Redirect to dashboard after a short delay
  setTimeout(() => {
    router.push('/dashboard');
  }, 1000);
};

const handleGoogleAuthError = (message: string) => {
  // Don't set error message here as the GoogleButton component now handles its own error display
  console.error('Google registration error:', message);
};
</script>

<style scoped>
.register-container {
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

input[type="text"],
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

.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style> 