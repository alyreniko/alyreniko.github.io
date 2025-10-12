<template>
  <div class="flex gap-10 overflow-x-hidden min-h-screen items-center justify-center">
    <div class="block-layer1 flex flex-col gap-5">
      <div class="block-layer2 inline-flex gap-5">
        <div class="inline-table">
          <div class="table-caption">
            <img
              class="rounded-full"
              src="https://alyreniko.page/avatar.webp?v=2025-10-11"
              alt="Diyor Haydarov"
            />
          </div>
          <h1 class="text-nowrap whitespace-nowrap mt-3">Diyor Haydarov</h1>
        </div>
        <ul class="flex flex-col justify-between">
          <li class="inline-flex gap-2 items-center text-nowrap whitespace-nowrap">
            <Icon name="fa7-solid:location-dot" class="w-4 h-4" />
            Novosibirsk
          </li>
          <li class="inline-flex gap-2 items-center text-nowrap whitespace-nowrap">
            <Icon name="fa7-solid:graduation-cap" class="w-4 h-4" />
            Higher College at NSU
          </li>
          <li class="inline-flex gap-2 items-center text-nowrap whitespace-nowrap">
            <Icon name="fa7-solid:book-atlas" class="w-4 h-4" />
            UI / UX + Frontend Developer
          </li>
          <li class="inline-flex gap-2 items-center text-nowrap whitespace-nowrap">
            <Icon name="fa7-solid:language" class="w-4 h-4" />
            Native Russian & English B1
          </li>
          <li class="inline-flex gap-2 items-center text-nowrap whitespace-nowrap">
            <Icon name="fa7-solid:birthday-cake" class="w-4 h-4" />
            27 Feb 2007 [ 18 y.o. ]
          </li>
        </ul>
      </div>
      <div class="block-layer2 inline-flex flex-col gap-4">
        <a
          v-for="(item, name) in links"
          :key="name"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="btn rounded-xl p-3 gap-2 flex items-center justify-start"
        >
          <Icon :name="item.icon" class="h-8 w-8" />
          {{ name }}
        </a>
      </div>
    </div>
    <div class="flex flex-col w-fit justify-between">
      <h2 class="font-extrabold w-fit" style="font-size: 100px; color: var(--color-text-tertiary)">
        Hi! I bring
        <span style="color: var(--color-accent-primary)">ideas</span>
        <br />
        to life with
        <span style="color: var(--color-button-hover)">design</span>
        <br />
        and {
        <span style="color: #2dba4e">code</span>
        }
      </h2>
      <div class="inline-flex flex-row gap-10 overflow-x-hidden">
        <Icon v-for="icon in icons" :name="icon" class="h-20 w-20" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
