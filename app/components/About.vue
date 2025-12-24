<template>
  <RunningLine class="-z-50" word="ABOUT ME" />
  <div
    id="about"
    class="block-section !mt-4 flex flex-row justify-center items-center min-h-screen gap-8"
  >
    <div class="about flex flex-col h-fit gap-8">
      <div class="flex flex-col block-layer1 bg-neutral-900 gap-4" style="padding: 2rem">
        <p class="deep relative explain text-neutral-400 text-sm">
          “Deep knowledge” - I know this well and have worked with it extensively.
        </p>
        <p class="practic relative explain text-neutral-400 text-sm">
          “Practical experience” - I have some knowledge and practical experience.
        </p>
        <p class="basic relative explain text-neutral-400 text-sm">
          “Basic experience” - I know little, but I had some experience.
        </p>
      </div>
      <div
        class="flex flex-row block-layer1 relative skill-block bg-neutral-900"
        style="padding: 2rem"
      >
        <div class="flex flex-col w-1/2 gap-2">
          <p class="text-sm text-neutral-400 mb-1">In coding</p>
          <p
            v-for="(level, name) in skills_code"
            :key="name"
            :class="[level]"
            class="relative explain skill"
          >
            {{ name }}
          </p>
        </div>
        <div class="flex flex-col w-1/2 gap-2">
          <p class="text-sm text-neutral-400 mb-1">In design</p>
          <p
            v-for="(level, name) in skills_design"
            :key="name"
            :class="[level]"
            class="relative explain skill"
          >
            {{ name }}
          </p>
        </div>
      </div>
      <div class="block-layer1 bg-neutral-900 h-fit w-full" style="padding: 1.75rem">
        <p class="text-sm text-neutral-400 mb-3">Education</p>
        <div v-for="(item, name) in education" :key="name" class="flex mb-1">
          <span class="w-24 flex-shrink-0 text-neutral-400">{{ item.start }} - {{ item.end }}</span>
          <span class="ml-1">{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.explain::before {
  content: '';
  position: relative;
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
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
const skills_code = {
  Python: 'deep',
  pygame: 'deep',
  HTML: 'deep',
  CSS: 'deep',
  'Arch Linux': 'deep',
  Vue: 'practic',
  JavaScript: 'practic',
  C: 'practic',
  'C++': 'basic',
  Git: 'practic',
 
};

const skills_design = {
  Figma: 'practic',
};

const education = {
  'School 4 (Akhangaran)': { start: 2015, end: 2024 },
  'Higher College of Informatics at Novosibirsk State University': { start: 2024, end: 'now' },
};
</script>
