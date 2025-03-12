<script setup lang="ts">
import SearchProductCard from './SearchProductCard.vue'
import VirtualScroll from '../VirtualScroll/VirtualScroll.vue'

import type { IProduct } from '@/types/product'

defineProps<{ products: IProduct[] }>()
</script>

<template>
  <div class="search-list">
    <VirtualScroll v-if="products.length" :height="520" :items="products" v-slot="{ item }">
      <SearchProductCard :product="item as IProduct" />
    </VirtualScroll>
    <div v-else class="not-found">
      <p>Not Found</p>
    </div>
  </div>
</template>

<style scoped>
.search-list {
  padding: 0 14px;
  border-radius: 8px;
  background-color: #fff;
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
}

.not-found p {
  font-size: 16px;
  font-weight: 600;
  color: #777;
}
</style>
