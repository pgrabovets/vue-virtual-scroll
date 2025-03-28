<script setup lang="ts">
import { useTemplateRef, onMounted, ref, watch } from 'vue'
import { throttle } from '@/utils/throttle'

const props = defineProps<{
  height: number
  items: { id: number }[]
}>()

const scrollRootRef = useTemplateRef('scrollEl')
const scrollContentRef = useTemplateRef('scrollContentEl')

const visibleItems = ref(props.items.slice(0, 1))
const rowHeight = ref(0)
const fullScrollHeight = ref(0)
const startNodePos = ref(0)
const visibleNodesCount = ref(0)
const yPos = ref(0)

const calculateRowHeight = () => {
  if (!scrollContentRef.value) {
    return
  }

  const firstElementChild = scrollContentRef.value?.firstElementChild as HTMLElement
  rowHeight.value = firstElementChild?.offsetHeight || 0
  fullScrollHeight.value = props.items.length * rowHeight.value
}

const handleScrollEvent = throttle(() => {
  if (!scrollRootRef.value) {
    return
  }

  const scrollTop = scrollRootRef.value.scrollTop
  startNodePos.value = Math.max(0, Math.floor(scrollTop / rowHeight.value) - 1)
  visibleNodesCount.value = Math.ceil(props.height / rowHeight.value) + 2
  visibleItems.value = props.items.slice(
    startNodePos.value,
    startNodePos.value + visibleNodesCount.value,
  )

  yPos.value = startNodePos.value * rowHeight.value
}, 120)

onMounted(() => {
  calculateRowHeight()
  handleScrollEvent()
})

watch(props, () => {
  if (scrollRootRef.value) {
    scrollRootRef.value.scrollTop = 0
  }

  calculateRowHeight()
  handleScrollEvent()
})
</script>

<template>
  <div
    ref="scrollEl"
    @scroll="handleScrollEvent"
    class="virtual-scroll"
    :style="{ height: props.height + 'px' }"
  >
    <div tabindex="-1" ref="scrollContentEl" :style="`transform: translateY(${yPos}px)`">
      <div class="scroll-item" v-for="item in visibleItems" :key="item.id">
        <slot :item="item"></slot>
      </div>
    </div>
    <div class="full-scroll-space" :style="{ height: fullScrollHeight + 'px' }"></div>
  </div>
</template>

<style scoped>
.virtual-scroll {
  position: relative;
  overflow-y: auto;
  display: grid;
}
.scroll-item {
  padding: 6px 0;
}
.full-scroll-space {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
}
</style>
