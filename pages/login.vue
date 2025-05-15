<script setup lang="ts">
const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref(null);
const successMessage = ref('');

async function handleLogin() {
  try {
    loading.value = true;
    error.value = null;
    successMessage.value = '';
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed. Please check your credentials.');
    }
    
    // Store token in localStorage
    localStorage.setItem('auth_token', data.token);
    
    // Show success message
    successMessage.value = 'Login successful! Redirecting...';
    
    // Redirect to home page or previous page after short delay
    setTimeout(() => {
      router.push('/');
    }, 1500);
    
  } catch (err: any) {
    error.value = err.message;
    console.error('Login error:', err);
  } finally {
    loading.value = false;
  }
}

// Function to autofill admin credentials
function fillAdminCredentials() {
  email.value = 'admin@example.com';
  password.value = 'password123';
}

// Set page metadata
useSeoMeta({
  title: 'Login - Office 365 Retail Store',
  description: 'Login to your Office 365 account'
});
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Login to Your Account</h1>
    
    <!-- Login form -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <form @submit.prevent="handleLogin">
          <!-- Success message -->
          <div v-if="successMessage" class="mb-6 p-3 bg-green-100 text-green-700 rounded-md">
            {{ successMessage }}
          </div>
          
          <!-- Error message -->
          <div v-if="error" class="mb-6 p-3 bg-red-100 text-red-700 rounded-md">
            {{ error }}
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="email">Email</label>
            <input 
              v-model="email" 
              type="email" 
              id="email" 
              placeholder="Your email" 
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
          </div>
          
          <div class="mb-6">
            <label class="block text-gray-700 mb-2" for="password">Password</label>
            <input 
              v-model="password" 
              type="password" 
              id="password" 
              placeholder="Your password" 
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </span>
            <span v-else>Login</span>
          </button>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Don't have an account? <NuxtLink to="/register" class="text-blue-600 hover:underline">Register</NuxtLink>
          </p>
        </div>
        
        <div class="mt-8 pt-6 border-t border-gray-200">
          <p class="text-sm text-gray-600 mb-2">Admin credentials for testing:</p>
          <div class="text-sm text-gray-800 bg-gray-100 p-2 rounded-md">
            <p><strong>Email:</strong> admin@example.com</p>
            <p><strong>Password:</strong> password123</p>
            <button 
              @click="fillAdminCredentials" 
              class="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded text-xs"
            >
              Fill Admin Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 