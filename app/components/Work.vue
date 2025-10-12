<template>
  <div class="flex flex-col w-full min-h-screen gap-52 py-32">
    <!-- CODE SECTION -->
    <div
      class="relative grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 overlay-label"
      data-label="CODE"
    >
      <div
        v-for="(item, key) in codeWork"
        :key="key"
        class="flex flex-col code__card block-layer2 bg-neutral-800 w-full h-fit gap-4"
      >
        <img draggable="false" class="aspect-[2/1] object-cover rounded-lg" :src="item.image" />
        <div class="text-neutral-200">
          <h3 class="text-lg mb-2 text-neutral-100 font-medium">{{ key }}</h3>
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
    <!-- DESIGN SECTION -->
    <div
      class="relative grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 overlay-label"
      data-label="DESIGN"
    >
      <div
        v-for="(item, key) in designWork"
        :key="key"
        class="flex flex-col code__card block-layer2 bg-neutral-800 w-full h-fit gap-4"
      >
        <img draggable="false" class="aspect-[1/1] object-cover rounded-lg" :src="item.image" />
        <div class="flex flex-nowrap justify-between items-center">
          <h3 class="text-lg mb-2 text-neutral-100 font-medium">{{ key }}</h3>
          <a href="" class="btn p-1 rounded-xl">
            <Icon :name="iconMap[item.source]" class="flex w-14 h-14" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- STYLES -->
<style scoped>
.overlay-label::before {
  content: attr(data-label);
  font-weight: 800;
  position: absolute;
  top: -160px;
  font-size: 180px;
  z-index: -1;
  width: 100%;
  color: #222222;
  pointer-events: none;
  text-align: center;
}
</style>

<!-- SCRIPTS -->
<script setup>
const iconMap = {
  github: 'streamline-logos:github-logo-1-block',
  behance: 'streamline-logos:behance-logo-block',
};

const codeWork = {
  'Photo2Pixel Dithering': {
    image: 'https://dummyimage.com/1200x600/444/aaa',
    description:
      'Pong in Python using This project is a Pygame - a simple and fun implementation of the classic arcade game for two players. This project is a great way to learn the basics of game great two development.',
    tags: ['python', 'pygame'],
    source: 'github',
    url: 'https://github.com/alyreniko/pong_pygame',
  },
  'Ullamco aliqua': {
    image: 'https://dummyimage.com/1200x600/444/aaa',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, exercitationem mollitia ducimus voluptates qui esse totam debitis ex officiis fuga quia tenetur libero expedita molestiae iste sequi quae incidunt possimus!',
    tags: ['python', 'pygame'],
    source: 'github',
    url: 'https://github.com/alyreniko/pong_pygame',
  },
  'Lorem exercitation': {
    image: 'https://dummyimage.com/1200x600/444/aaa',
    description:
      'Lorem ipsum dolor sit amet, deserunt exercitation veniam esse nostrud sed aute aliqua ad cupidatat sunt',
    tags: ['python', 'pygame'],
    source: 'github',
    url: 'https://github.com/alyreniko/pong_pygame',
  },
  'Commodo ad': {
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
    source: 'github',
    url: 'https://github.com/alyreniko/pong_pygame',
  },
};

const designWork = {
  Design: {
    image: 'https://dummyimage.com/1200x1200/444/aaa',
    source: 'behance',
    url: 'https://behance.net/',
  },
  Lorem: {
    image: 'https://dummyimage.com/1200x1200/444/aaa',
    source: 'behance',
    url: 'https://behance.net/',
  },
};
</script>
