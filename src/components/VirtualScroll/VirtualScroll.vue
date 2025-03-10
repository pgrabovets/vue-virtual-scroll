<script setup lang="ts">
import { useTemplateRef } from 'vue'

const props = defineProps<{
  height: number
}>()

const scrollRef = useTemplateRef('scrollEl')

const handleScroll = () => {
  console.log(scrollRef.value)
}
</script>

<template>
  <div
    ref="scrollEl"
    @scroll="handleScroll"
    class="virtual-scroll"
    :style="{ height: props.height + 'px' }"
  ></div>
</template>

<style scoped>
.virtual-scroll {
  overflow-y: auto;
}
</style>
