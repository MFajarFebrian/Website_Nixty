<script setup>
const email = ref('admin@example.com')
const password = ref('password123')
const loginResult = ref(null)
const error = ref(null)
const loading = ref(false)

async function login() {
  try {
    loading.value = true
    error.value = null
    loginResult.value = null
    
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }
    
    loginResult.value = data
    console.log('Login successful:', data)
    
    // Store token in localStorage
    localStorage.setItem('auth_token', data.token)
    
  } catch (err) {
    error.value = err.message
    console.error('Login error:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">Test Admin Login</h1>
    
    <form @submit.prevent="login" class="space-y-4">
      <div>
        <label class="block text-gray-700 mb-2" for="email">Email</label>
        <input 
          v-model="email" 
          id="email" 
          type="email" 
          class="w-full px-3 py-2 border rounded-lg" 
          placeholder="Email"
        />
      </div>
      
      <div>
        <label class="block text-gray-700 mb-2" for="password">Password</label>
        <input 
          v-model="password" 
          id="password" 
          type="password" 
          class="w-full px-3 py-2 border rounded-lg" 
          placeholder="Password"
        />
      </div>
      
      <div>
        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          :disabled="loading"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </div>
    </form>
    
    <div v-if="error" class="mt-4 p-3 bg-red-100 text-red-700 rounded">
      {{ error }}
    </div>
    
    <div v-if="loginResult" class="mt-4">
      <h2 class="text-lg font-semibold mb-2">Login Successful!</h2>
      <div class="p-3 bg-green-100 text-green-800 rounded">
        <p><strong>User:</strong> {{ loginResult.user.name }}</p>
        <p><strong>Email:</strong> {{ loginResult.user.email }}</p>
        <p><strong>Role:</strong> {{ loginResult.user.role }}</p>
        <p class="mt-2"><strong>Token:</strong></p>
        <p class="text-xs overflow-auto whitespace-nowrap">{{ loginResult.token }}</p>
      </div>
      <div class="mt-4">
        <a href="/test-profile" class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 inline-block">
          View Profile
        </a>
      </div>
    </div>
  </div>
</template> 