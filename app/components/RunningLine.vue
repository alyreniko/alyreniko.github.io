<template>
  <div class="absolute w-full overflow-hidden" area-hidden="true" role="presentation">
    <div class="overflow-hidden" :style="{ '--ticker-speed': speed + 's' }">
      <div class="line opacity-0 pointer-events-none">{{ word }}</div>
      <div class="line absolute animate-ticker-1">{{ word }}</div>
      <div class="line absolute animate-ticker-2">{{ word }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  word: { type: String, default: 'HELLO' },
  space: { type: Number, default: 0 },
  speed: { type: Number, default: 7.0 },
});

const dynamicSpace = ref(props.space);

const updateScreenSize = () => {
  const isSmall = window.matchMedia('(max-width: 430px)').matches && props.word.length > 6;
  dynamicSpace.value = props.space + (isSmall ? 230 : 0);
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<style scoped>
.animate-ticker-1 {
  animation: ticker1 var(--ticker-speed, 5s) linear infinite;
}

.animate-ticker-2 {
  animation: ticker2 var(--ticker-speed, 5s) linear infinite;
}

@keyframes ticker1 {
  to {
    transform: translateX(calc(-100% - v-bind('dynamicSpace + "px"')));
  }
}

@keyframes ticker2 {
  from {
    transform: translateX(calc(100% + v-bind('dynamicSpace + "px"')));
  }
  to {
    transform: translateX(0);
  }
}
</style>
