<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ProductSearchBar from './ProductSearchBar.vue'
import ProductSearchList from './ProductSearchList.vue'
import { getProducts } from '@/services/product-service'

import type { IProduct } from '@/types/product'

const search = ref('')
const products = ref<IProduct[]>([])

const filtered = computed(() => {
  const searchTerm = search.value.trim().toLowerCase()
  if (!searchTerm) {
    return products.value
  }

  const result = products.value.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm)
  })

  return result
})

onMounted(async () => {
  try {
    const data = await getProducts()
    products.value = data.map((product) => ({
      id: product?.id || 0,
      title: product?.title || '',
      description: product?.description || '',
      category: product?.category || '',
      price: product?.price || 0,
      discountPercentage: product?.discountPercentage || 0,
      rating: product?.rating || 0,
      brand: product?.brand || '',
      thumbnail: product?.thumbnail || '',
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<template>
  <div v-if="products.length > 0" class="product-search">
    <ProductSearchBar v-model="search" />
    <ProductSearchList :products="filtered" />
  </div>
  <div class="loading" v-else>loading...</div>
</template>

<style scoped>
.product-search {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 620px;
  width: 100%;
}

.loading {
  font-size: 16px;
  font-weight: 400;
}
</style>
