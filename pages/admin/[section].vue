<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

const route = useRoute()
const section = route.params.section as string

// Section titles and metadata for each section
const sectionData = {
  products: {
    title: 'Manage Products',
    description: 'Manage Office 365 products',
    heading: 'Product Management'
  },
  orders: {
    title: 'Manage Orders',
    description: 'Manage customer orders',
    heading: 'Order Management'
  },
  users: {
    title: 'Manage Users',
    description: 'Manage user accounts',
    heading: 'User Management'
  },
  settings: {
    title: 'Admin Settings',
    description: 'Configure store settings',
    heading: 'Store Settings'
  }
}

// Get data for the current section
const sectionInfo = sectionData[section] || {
  title: `${section.charAt(0).toUpperCase() + section.slice(1)}`,
  description: `Manage ${section}`,
  heading: `${section.charAt(0).toUpperCase() + section.slice(1)} Management`
}

// Set SEO metadata
useSeoMeta({
  title: sectionInfo.title,
  description: sectionInfo.description
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">{{ sectionInfo.heading }}</h1>
    
    <!-- Admin Section -->
    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 class="text-xl font-semibold mb-4">{{ sectionInfo.heading }}</h2>
      <p class="text-gray-600">This is for the {{ sectionInfo.heading }} section.</p>
      
      <!-- Table for admin sections -->
      <div class="mt-6 overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">ID</th>
              <th class="py-2 px-4 border-b">Name</th>
              <th class="py-2 px-4 border-b">Date</th>
              <th class="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">1</td>
              <td class="py-2 px-4 border-b">Example Item</td>
              <td class="py-2 px-4 border-b">2025-01-01</td>
              <td class="py-2 px-4 border-b">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">2</td>
              <td class="py-2 px-4 border-b">Another Item</td>
              <td class="py-2 px-4 border-b">2025-01-02</td>
              <td class="py-2 px-4 border-b">
                <button class="text-blue-600 hover:underline mr-2">Edit</button>
                <button class="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template> 