<template>
  <div id="projects" class="flex flex-col relative min-h-screen">
    <div class="relative">
      <!-- CODE SECTION -->
      <RunningLine class="-z-50" word="CODE" />
      <div class="block-section grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 !mt-4">
        <div
          v-for="(item, i) in codeWork"
          :key="i"
          class="flex flex-col code__card block-layer2 bg-neutral-800 w-full h-fit gap-4"
        >
          <img draggable="false" class="aspect-[2/1] object-cover rounded-lg" :src="item.image" />
          <div class="text-neutral-200">
            <h3 class="text-lg mb-2 text-neutral-100 font-medium">{{ item.title }}</h3>
            <p class="text-base text-neutral-400">{{ item.description }}</p>
          </div>
          <div class="flex flex-nowrap justify-between items-end">
            <div class="code__tags flex gap-3 self-end flex-wrap">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="py-1 px-2 rounded-lg w-fit h-fit text-neutral-400 bg-neutral-700 text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <a :href="item.url" class="btn p-1 rounded-xl" target="_blank">
              <Icon :name="iconMap[item.source]" class="flex w-14 h-14" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="relative"> -->
    <!-- DESIGN SECTION -->
    <!-- <RunningLine class="-z-50" word="DESIGN" /> -->
    <!-- <div class="block-section grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 !mt-4"> -->
    <!-- <div -->
    <!-- v-for="(item, i) in designItems" -->
    <!-- :key="i" -->
    <!-- class="flex flex-col code__card block-layer2 bg-neutral-800 w-full h-fit gap-4" -->
    <!-- > -->
    <!-- <img -->
    <!-- draggable="false" -->
    <!-- class="aspect-[1/1] object-cover rounded-lg" -->
    <!-- :src="item.image" -->
    <!-- :alt="item.title" -->
    <!-- /> -->
    <!-- <div class="flex flex-nowrap justify-between items-center"> -->
    <!-- <h3 class="text-lg mb-2 text-neutral-100 font-medium">{{ item.title }}</h3> -->
    <!-- <a :href="item.url" class="btn p-1 rounded-xl"> -->
    <!-- <Icon :name="iconMap[item.source]" class="flex w-14 h-14" /> -->
    <!-- </a> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<!-- SCRIPTS -->
<script lang="ts" setup>
import works from '~/assets/works.json';

const designItems = works.design;

const iconMap = {
  github: 'streamline-logos:github-logo-1-block',
  behance: 'streamline-logos:behance-logo-block',
};

const codeWork = works.code;
</script>
