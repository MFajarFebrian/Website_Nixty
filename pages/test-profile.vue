<script setup>
const profile = ref(null)
const error = ref(null)
const loading = ref(false)

async function fetchProfile() {
  try {
    loading.value = true
    error.value = null
    
    // Get token from localStorage
    const token = localStorage.getItem('auth_token')
    
    if (!token) {
      throw new Error('Not authenticated. Please login first.')
    }
    
    const response = await fetch('/api/user/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch profile')
    }
    
    profile.value = data
    console.log('Profile fetched:', data)
    
  } catch (err) {
    error.value = err.message
    console.error('Profile fetch error:', err)
  } finally {
    loading.value = false
  }
}

// Auto-fetch on page load if token exists
onMounted(() => {
  if (localStorage.getItem('auth_token')) {
    fetchProfile()
  }
})
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">User Profile</h1>
    
    <div class="mb-4">
      <button 
        @click="fetchProfile" 
        class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        :disabled="loading"
      >
        {{ loading ? 'Loading...' : 'Fetch Profile' }}
      </button>
      
      <button 
        @click="() => { localStorage.removeItem('auth_token'); profile = null }" 
        class="ml-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
    
    <div v-if="error" class="mt-4 p-3 bg-red-100 text-red-700 rounded">
      {{ error }}
    </div>
    
    <div v-if="profile" class="mt-4">
      <h2 class="text-lg font-semibold mb-2">Profile Information</h2>
      <div class="p-3 bg-green-100 text-green-800 rounded">
        <p><strong>User ID:</strong> {{ profile.id }}</p>
        <p><strong>Name:</strong> {{ profile.name }}</p>
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Role:</strong> {{ profile.role }}</p>
        <p><strong>Joined:</strong> {{ new Date(profile.createdAt).toLocaleString() }}</p>
      </div>
    </div>
    
    <div v-else-if="!error" class="mt-4 p-3 bg-gray-100 text-gray-700 rounded">
      No profile loaded. Please click "Fetch Profile" or login first at <a href="/test-login" class="text-blue-600 hover:underline">Login Page</a>.
    </div>
  </div>
</template> 