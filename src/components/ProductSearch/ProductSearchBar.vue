<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div class="search-bar">
    <input
      name="search-control"
      v-model="model"
      placeholder="search product"
      class="search-bar-input"
      type="text"
    />
  </div>
</template>

<style scoped>
.search-bar {
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
}

.search-bar-input {
  width: 100%;
  height: 32px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 18px;
}
</style>
