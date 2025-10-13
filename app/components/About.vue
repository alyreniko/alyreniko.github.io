<template>
  <div class="block-layer1 bg-neutral-900">
    <p class="deep relative explain">
      “Deep knowledge” - I know this well and have worked with it extensively.
    </p>
    <p class="practic relative explain">
      “Practical experience” - I have some knowledge and practical experience.
    </p>
    <p class="basic relative explain">
      “Basic experience” - I know little, but I had some experience.
    </p>
  </div>
  <div class="block-layer1 relative skill-block mb-10 bg-neutral-900">
    <div class="w-1/2">
      <p
        v-for="(level, name) in skills"
        :key="name"
        :class="[level]"
        class="relative explain skill"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.explain::before {
  content: '';
  position: relative;
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-right: 0.2em;
  border-radius: 50%;
}

.skill::before {
  margin-right: 0.75rem;
}

.deep::before {
  background-color: #2ecc71;
}

.practic::before {
  background-color: #ffb020;
}

.basic::before {
  background-color: #6c7a89;
}
</style>

<script setup>
const skills = {
  Python: 'deep',
  pygame: 'deep',
  HTML: 'deep',
  'Arch Linux': 'deep',
  C: 'practic',
  'C++': 'practic',
  CSS: 'practic',
  JavaScript: 'practic',
  Git: 'practic',
  Vue: 'base',
};
</script>
