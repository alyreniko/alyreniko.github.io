<template>
  <div
    class="hero block-section flex gap-10 overflow-x-hidden min-h-screen items-center justify-center"
  >
    <div class="block-layer1 bg-neutral-900 flex flex-col gap-5">
      <div class="hero__desc block-layer2 bg-neutral-800 inline-flex gap-5">
        <div class="inline-table">
          <div class="table-caption">
            <img class="rounded-full" src="/avatar.webp" alt="Diyor Haydarov" draggable="false" />
          </div>
          <h1 class="text-nowrap whitespace-nowrap mt-3 text-neutral-400">Diyor Haydarov</h1>
        </div>
        <ul class="flex flex-col justify-between">
          <li
            v-for="item in infoItems"
            :key="item.id"
            class="inline-flex gap-2 items-center text-nowrap whitespace-nowrap"
          >
            <Icon :name="item.icon" class="w-4 h-4" />
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div class="block-layer2 bg-neutral-800 inline-flex flex-col gap-4">
        <a
          v-for="(item, name) in links"
          :key="name"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn rounded-xl p-3 gap-2 flex items-center justify-start font-medium"
        >
          <Icon :name="item.icon" class="h-8 w-8 text-neutral-100" />
          {{ name }}
        </a>
      </div>
    </div>
    <div class="tagblock flex flex-col">
      <h2 class="tagblock__line font-extrabold w-fit text-[100px] text-neutral-600">
        Hi! I bring
        <span style="color: var(--color-accent-primary)">ideas</span>
        <br />
        to life with
        <span style="color: var(--color-button-hover)">design</span>
        <br />
        and
        <span style="color: #2dba4e">{&nbspcode&nbsp}</span>
      </h2>
      <div class="tagblock__icons inline-flex flex-row gap-10 overflow-x-hidden mt-10">
        <Icon v-for="icon in icons" :key="icon" :name="icon" class="h-20 w-20" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const birthDate = new Date('2007-02-27').getTime();

const age = computed(() => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
});

const infoItems = [
  {
    id: 'location',
    icon: 'fa7-solid:location-dot',
    text: 'Novosibirsk',
  },
  {
    id: 'education',
    icon: 'fa7-solid:graduation-cap',
    text: 'Higher College at NSU',
  },
  {
    id: 'role',
    icon: 'fa7-solid:book-atlas',
    text: 'UI / UX + Frontend Developer',
  },
  {
    id: 'language',
    icon: 'fa7-solid:language',
    text: 'Native Russian & English B1',
  },
  {
    id: 'birthday',
    icon: 'fa7-solid:birthday-cake',
    text: `27 Feb 2007 [ ${age.value} y.o. ]`,
  },
];

const links = {
  GitHub: {
    icon: 'streamline-logos:github-logo-1-block',
    url: 'https://github.com/alyreniko',
  },
  Telegram: {
    icon: 'streamline-logos:telegram-logo-1-block',
    url: 'https://t.me/alyreniko',
  },
  Behance: {
    icon: 'streamline-logos:behance-logo-block',
    url: 'https://behance.net/alyreniko',
  },
  LinkedIn: {
    icon: 'streamline-logos:linkedin-logo-block',
    url: 'https://linkedin.com/in/alyreniko',
  },
  Pinterest: {
    icon: 'streamline-logos:pinterest-logo-block',
    url: 'https://pinterest.com/alyreniko',
  },
};
const icons = [
  'skill-icons:arch-dark',
  'skill-icons:figma-dark',
  'skill-icons:javascript',
  'skill-icons:nuxtjs-dark',
  'skill-icons:python-dark',
  'skill-icons:vuejs-dark',
];
</script>
