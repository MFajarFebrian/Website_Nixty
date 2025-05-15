<script setup lang="ts">
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref(null);
const successMessage = ref('');

async function handleRegister() {
  try {
    // Reset error and success states
    error.value = null;
    successMessage.value = '';
    
    // Validate form inputs
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
      error.value = 'All fields are required.';
      return;
    }
    
    if (password.value !== confirmPassword.value) {
      error.value = 'Passwords do not match.';
      return;
    }
    
    if (password.value.length < 6) {
      error.value = 'Password must be at least 6 characters.';
      return;
    }
    
    // Start loading
    loading.value = true;
    
    // Make API request
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed. Please try again.');
    }
    
    // Show success message
    successMessage.value = 'Registration successful! Redirecting to login page...';
    
    // Redirect to login page after delay
    setTimeout(() => {
      router.push('/login');
    }, 2000);
    
  } catch (err: any) {
    error.value = err.message;
    console.error('Registration error:', err);
  } finally {
    loading.value = false;
  }
}

// Set page metadata
useSeoMeta({
  title: 'Register - Office 365 Retail Store',
  description: 'Create a new Office 365 account'
});
</script>

<template>
  <div class="max-w-md mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Create an Account</h1>
    
    <!-- Register form -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <form @submit.prevent="handleRegister">
          <!-- Success message -->
          <div v-if="successMessage" class="mb-6 p-3 bg-green-100 text-green-700 rounded-md">
            {{ successMessage }}
          </div>
          
          <!-- Error message -->
          <div v-if="error" class="mb-6 p-3 bg-red-100 text-red-700 rounded-md">
            {{ error }}
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="name">Full Name</label>
            <input 
              v-model="name" 
              type="text" 
              id="name" 
              placeholder="Your name" 
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
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
          
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="password">Password</label>
            <input 
              v-model="password" 
              type="password" 
              id="password" 
              placeholder="Choose a password" 
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
              minlength="6"
            />
            <p class="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
          </div>
          
          <div class="mb-6">
            <label class="block text-gray-700 mb-2" for="confirm-password">Confirm Password</label>
            <input 
              v-model="confirmPassword" 
              type="password" 
              id="confirm-password" 
              placeholder="Confirm your password" 
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
              Creating Account...
            </span>
            <span v-else>Register</span>
          </button>
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-gray-600">
            Already have an account? <NuxtLink to="/login" class="text-blue-600 hover:underline">Login</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template> 