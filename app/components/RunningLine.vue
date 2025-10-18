<template>
  <div class="absolute w-full overflow-hidden">
    <div class="overflow-hidden" :style="{ '--ticker-speed': speed + 's' }">
      <div class="line opacity-0 pointer-events-none">{{ word }}</div>
      <div class="line absolute animate-ticker-1">{{ word }}</div>
      <div class="line absolute animate-ticker-2">{{ word }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  word: { type: String, default: 'HELLO' },
  space: { type: Number, default: 0 },
  speed: { type: Number, default: 7.0 },
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
    transform: translateX(calc(-100% - v-bind('space + "px"')));
  }
}

@keyframes ticker2 {
  from {
    transform: translateX(calc(100% + v-bind('space + "px"')));
  }
}
</style>
