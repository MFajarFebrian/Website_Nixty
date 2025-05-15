<script setup>
const activeTab = ref('login')
const loginEmail = ref('admin@example.com')
const loginPassword = ref('password123')
const loginResult = ref(null)
const loginError = ref(null)
const loginLoading = ref(false)

const registerName = ref('New User')
const registerEmail = ref('newuser@example.com')
const registerPassword = ref('test123')
const registerResult = ref(null)
const registerError = ref(null)
const registerLoading = ref(false)

async function login() {
  try {
    loginLoading.value = true
    loginError.value = null
    loginResult.value = null
    
    console.log('Attempting login with:', { email: loginEmail.value, password: loginPassword.value })
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginEmail.value,
        password: loginPassword.value
      })
    })
    
    const data = await response.json()
    console.log('Login response:', data)
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }
    
    loginResult.value = data
    
    // Store token in localStorage
    localStorage.setItem('auth_token', data.token)
    
  } catch (err) {
    loginError.value = err.message
    console.error('Login error:', err)
  } finally {
    loginLoading.value = false
  }
}

async function register() {
  try {
    registerLoading.value = true
    registerError.value = null
    registerResult.value = null
    
    console.log('Attempting registration with:', { 
      name: registerName.value,
      email: registerEmail.value,
      password: registerPassword.value 
    })
    
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value
      })
    })
    
    const data = await response.json()
    console.log('Register response:', data)
    
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed')
    }
    
    registerResult.value = data
    
    // Store token in localStorage
    localStorage.setItem('auth_token', data.token)
    
  } catch (err) {
    registerError.value = err.message
    console.error('Registration error:', err)
  } finally {
    registerLoading.value = false
  }
}

function checkProfile() {
  window.location.href = '/test-profile'
}

function fillAdminCredentials() {
  loginEmail.value = 'admin@example.com'
  loginPassword.value = 'password123'
}

function fillTestUserCredentials() {
  loginEmail.value = 'test@example.com'
  loginPassword.value = 'test123'
}
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">Authentication Test Page</h1>
    
    <div class="mb-6 flex border-b">
      <button 
        @click="activeTab = 'login'" 
        class="py-2 px-4 mr-2"
        :class="activeTab === 'login' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'"
      >
        Login Test
      </button>
      <button 
        @click="activeTab = 'register'" 
        class="py-2 px-4 mr-2"
        :class="activeTab === 'register' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'"
      >
        Registration Test
      </button>
    </div>
    
    <!-- Login Tab -->
    <div v-if="activeTab === 'login'" class="space-y-6">
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-2" for="login-email">Email</label>
          <input 
            v-model="loginEmail" 
            id="login-email" 
            type="email" 
            class="w-full px-3 py-2 border rounded-lg" 
            placeholder="Email"
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="login-password">Password</label>
          <input 
            v-model="loginPassword" 
            id="login-password" 
            type="password" 
            class="w-full px-3 py-2 border rounded-lg" 
            placeholder="Password"
          />
        </div>
        
        <div class="flex space-x-2">
          <button 
            type="submit" 
            class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            :disabled="loginLoading"
          >
            {{ loginLoading ? 'Logging in...' : 'Login' }}
          </button>
          
          <button 
            type="button"
            @click="fillAdminCredentials"
            class="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
          >
            Use Admin
          </button>
          
          <button 
            type="button"
            @click="fillTestUserCredentials"
            class="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
          >
            Use Test User
          </button>
        </div>
      </form>
      
      <div v-if="loginError" class="p-3 bg-red-100 text-red-700 rounded">
        <strong>Error:</strong> {{ loginError }}
      </div>
      
      <div v-if="loginResult" class="border p-4 rounded">
        <h2 class="text-lg font-semibold mb-2">Login Successful!</h2>
        <div class="p-3 bg-green-100 text-green-800 rounded mb-4">
          <p><strong>User:</strong> {{ loginResult.user.name }}</p>
          <p><strong>Email:</strong> {{ loginResult.user.email }}</p>
          <p><strong>Role:</strong> {{ loginResult.user.role }}</p>
        </div>
        
        <details class="bg-gray-100 p-2 rounded">
          <summary class="cursor-pointer">JWT Token</summary>
          <p class="text-xs overflow-auto p-2 whitespace-nowrap">{{ loginResult.token }}</p>
        </details>
        
        <div class="mt-4">
          <button 
            @click="checkProfile" 
            class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Check User Profile
          </button>
        </div>
      </div>
    </div>
    
    <!-- Register Tab -->
    <div v-if="activeTab === 'register'" class="space-y-6">
      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-2" for="register-name">Name</label>
          <input 
            v-model="registerName" 
            id="register-name" 
            type="text" 
            class="w-full px-3 py-2 border rounded-lg" 
            placeholder="Full Name"
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="register-email">Email</label>
          <input 
            v-model="registerEmail" 
            id="register-email" 
            type="email" 
            class="w-full px-3 py-2 border rounded-lg" 
            placeholder="Email"
          />
        </div>
        
        <div>
          <label class="block text-gray-700 mb-2" for="register-password">Password</label>
          <input 
            v-model="registerPassword" 
            id="register-password" 
            type="password" 
            class="w-full px-3 py-2 border rounded-lg" 
            placeholder="Password"
          />
          <p class="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
        </div>
        
        <div>
          <button 
            type="submit" 
            class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            :disabled="registerLoading"
          >
            {{ registerLoading ? 'Registering...' : 'Register' }}
          </button>
        </div>
      </form>
      
      <div v-if="registerError" class="p-3 bg-red-100 text-red-700 rounded">
        <strong>Error:</strong> {{ registerError }}
      </div>
      
      <div v-if="registerResult" class="border p-4 rounded">
        <h2 class="text-lg font-semibold mb-2">Registration Successful!</h2>
        <div class="p-3 bg-green-100 text-green-800 rounded mb-4">
          <p><strong>User:</strong> {{ registerResult.user.name }}</p>
          <p><strong>Email:</strong> {{ registerResult.user.email }}</p>
          <p><strong>Role:</strong> {{ registerResult.user.role }}</p>
        </div>
        
        <details class="bg-gray-100 p-2 rounded">
          <summary class="cursor-pointer">JWT Token</summary>
          <p class="text-xs overflow-auto p-2 whitespace-nowrap">{{ registerResult.token }}</p>
        </details>
        
        <div class="mt-4">
          <button 
            @click="checkProfile" 
            class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Check User Profile
          </button>
        </div>
      </div>
    </div>
    
    <div class="mt-8 pt-6 border-t">
      <h3 class="font-semibold mb-2">Test Accounts:</h3>
      <div class="space-y-2">
        <div class="bg-gray-100 p-3 rounded">
          <p><strong>Admin User:</strong> admin@example.com / password123</p>
        </div>
        <div class="bg-gray-100 p-3 rounded">
          <p><strong>Test User:</strong> test@example.com / test123</p>
        </div>
      </div>
    </div>
  </div>
</template> 