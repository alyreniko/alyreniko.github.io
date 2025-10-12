<template>
  <div class="flex min-h-screen gap-8">
    <div
      v-for="(item, key) in work"
      :key="key"
      class="flex flex-col code__card block-layer2 bg-neutral-800 max-w-[420px] h-fit gap-4"
    >
      <img draggable="false" class="aspect-[2/1] object-cover rounded-lg" :src="item.image" />
      <div class="text-neutral-200">
        <h3 class="text-lg mb-2 text-neutral-100">{{ key }}</h3>
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
        <a href="" class="btn p-1 rounded-xl">
          <Icon :name="iconMap[item.source]" class="flex w-14 h-14" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const iconMap = {
  github: 'streamline-logos:github-logo-1-block',
  behance: 'streamline-logos:behance-logo-block',
};

const work = {
  'Photo2Pixel Dithering': {
    image: 'https://dummyimage.com/1200x600/444/aaa',
    description:
      'Pong in Python using This project is a Pygame - a simple and fun implementation of the classic arcade game for two players. This project is a great way to learn the basics of game great two development.',
    tags: ['python', 'pygame'],
    source: 'github',
    url: 'https://github.com/alyreniko/pong_pygame',
  },
  Lorem: {
    image: 'https://dummyimage.com/1200x600/444/aaa',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo deleniti deserunt voluptatibus, accusamus minus a dolorem tempora, reiciendis libero labore quisquam temporibus dolores. Unde cum nulla fugiat praesentium sit?',
    tags: ['lorem', 'lorem', 'lorem'],
    source: 'behance',
    url: 'https://github.com/alyreniko/pong_pygame',
  },
};
</script>
