<script setup lang="ts">
import type { IProduct } from '@/types/product'
import IconStar from '@/components/icons/IconStar.vue'

const props = defineProps<{
  product: IProduct
}>()

const { title, description, discountPercentage, brand, price, rating, category, thumbnail } =
  props.product
</script>

<template>
  <div class="product-card">
    <div class="product-img-block">
      <img :src="thumbnail" loading="lazy" alt="product image" width="180" height="180" />
    </div>
    <div class="product-info-block">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <div class="flex-with-gap">
        <span class="discount">Discount {{ discountPercentage }}%</span>
        <span class="brand">{{ brand }}</span>
      </div>
      <div class="flex-with-gap items-center">
        <span class="price">$ {{ price }}</span>
        <div class="rating-wrapper">
          <IconStar color="#fd0" size="20" /> <span class="rating"> {{ rating }}</span>
        </div>
        <span class="category-badge">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  gap: 12px;
  padding: 8px;
}

.product-img-block {
  display: flex;
  align-items: center;
}

.product-info-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  flex-grow: 1;
}

.flex-with-gap {
  display: flex;
  gap: 16px;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: #000;
}

.description {
  font-size: 15px;
  font-weight: 500;
  color: #777;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
}
.discount {
  color: #f44;
  font-size: 15px;
  font-weight: 500;
}

.brand {
  color: #0aa;
  font-size: 15px;
  font-weight: 500;
}

.price {
  color: #0aa;
  font-size: 15px;
  font-weight: 500;
}

.rating-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.rating {
  color: #0aa;
  font-size: 15px;
  font-weight: 500;
}

.category-badge {
  background-color: #000;
  color: #fff;
  font-size: 13px;
  border-radius: 999px;
  display: inline-flex;
  padding: 2px 8px;
  align-items: center;
  height: 24px;
}
</style>
