<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string[]
const path = Array.isArray(slug) ? slug.join('/') : slug

// Simple page data map
const pageData = {
  'products': {
    title: 'Office 365 Products',
    description: 'Browse our Office 365 products',
    content: '<h1 class="text-3xl font-bold mb-6">Office 365 Products</h1><p>Browse our selection of Office 365 products for individuals and businesses.</p>'
  },
  'pricing': {
    title: 'Office 365 Pricing',
    description: 'View our pricing options',
    content: '<h1 class="text-3xl font-bold mb-6">Office 365 Pricing</h1><p>Compare our pricing plans to find the right Office 365 solution for you.</p>'
  },
  'support': {
    title: 'Office 365 Support',
    description: 'Get help with Office 365',
    content: '<h1 class="text-3xl font-bold mb-6">Office 365 Support</h1><p>Need help with your Office 365 subscription? We\'re here to help.</p>'
  },
  'about': {
    title: 'About Our Office 365 Store',
    description: 'Learn about our store',
    content: '<h1 class="text-3xl font-bold mb-6">About Our Office 365 Store</h1><p>We\'ve been providing Office 365 solutions since 2010.</p>'
  },
  'contact': {
    title: 'Contact Us',
    description: 'Get in touch with our team',
    content: '<h1 class="text-3xl font-bold mb-6">Contact Us</h1><p>Have questions? Reach out to our team for assistance.</p>'
  }
}

// Get page data or default
const pageInfo = pageData[path] || {
  title: '404 - Page Not Found',
  description: 'The requested page could not be found',
  content: '<h1 class="text-3xl font-bold mb-6">404 - Page Not Found</h1><p>The page you are looking for doesn\'t exist.</p>'
}

// Set SEO metadata
useSeoMeta({
  title: pageInfo.title,
  description: pageInfo.description
})
</script>

<template>
  <div>
    <div v-html="pageInfo.content"></div>
    
    <!-- Placeholder content for dynamic pages -->
    <div v-if="pageInfo.title !== '404 - Page Not Found'" class="mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Additional Information</h2>
      <p class="text-gray-600">This is a placeholder for the {{ path }} page.</p>
    </div>
  </div>
</template> 