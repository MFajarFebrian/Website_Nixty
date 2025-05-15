<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url?: string;
}

const products = ref<Product[]>([]);
const loading = ref(true);
const error = ref(null);
const searchQuery = ref('');
const selectedCategory = ref('');
const categories = ref<string[]>([]);

// Fetch all products
async function fetchProducts() {
  loading.value = true;
  error.value = null;
  
  try {
    // Build query string with filters
    let url = '/api/products';
    const params = new URLSearchParams();
    
    if (searchQuery.value) {
      params.append('query', searchQuery.value);
    }
    
    if (selectedCategory.value) {
      params.append('category', selectedCategory.value);
    }
    
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    products.value = data.products;
    
    // Extract unique categories from products
    const uniqueCategories = new Set<string>();
    data.products.forEach((product: Product) => {
      if (product.category) {
        uniqueCategories.add(product.category);
      }
    });
    
    categories.value = Array.from(uniqueCategories);
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// Watch for changes in search query or category filter
watch([searchQuery, selectedCategory], debounce(() => {
  fetchProducts();
}, 300));

// Initial fetch
onMounted(() => {
  fetchProducts();
});

// Format price to display in currency format
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: 'USD'
  }).format(price);
}

// Set page metadata
useSeoMeta({
  title: 'Products - Office 365 Retail Store',
  description: 'Browse our Office 365 products and plans'
})
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Office 365 Products</h1>
    
    <!-- Filters and Search -->
    <div class="mb-8 bg-white p-4 rounded-lg shadow">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-1">Search Products</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by name or description..."
            class="w-full px-4 py-2 border rounded-md"
          />
        </div>
        
        <div class="md:w-64">
          <label class="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
          <select
            v-model="selectedCategory"
            class="w-full px-4 py-2 border rounded-md"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- Loading and Error States -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
    </div>
    
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>
    
    <!-- Product Grid -->
    <div v-else-if="products.length === 0" class="text-center py-12">
      <p class="text-xl text-gray-600">No products found matching your criteria.</p>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
        <div class="p-5">
          <div class="text-sm text-blue-600 font-semibold mb-1">{{ product.category }}</div>
          <h2 class="text-lg font-bold mb-2">{{ product.name }}</h2>
          <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
          
          <div class="flex justify-between items-center">
            <span class="text-xl font-bold text-blue-700">{{ formatPrice(product.price) }}<span class="text-sm font-normal">/month</span></span>
            
            <NuxtLink :to="`/product/${product.id}`" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 