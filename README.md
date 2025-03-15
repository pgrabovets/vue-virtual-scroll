# Vue Virtual Scroll (Vue 3 + Typescript)

## Example
```vue
<script setup lang="ts">
  import SearchProductCard from './SearchProductCard.vue'
  import VirtualScroll from '../VirtualScroll/VirtualScroll.vue'
  import type { IProduct } from '@/types/product'

  defineProps<{ products: IProduct[] }>()
</script>

<template>
  <VirtualScroll :height="520" :items="products" v-slot="{ item }">
    <SearchProductCard :product="item as IProduct" />
  </VirtualScroll>
</template>
```

## VirtualScroll Props
```
const props = defineProps<{
  height: number
  items: { id: number }[]
}>()

```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
