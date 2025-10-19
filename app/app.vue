<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Diyor Haydarov (alyreniko) – UI/UX Designer & Frontend Developer',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'description',
      content:
        'Diyor Haydarov (alyreniko) – UI/UX Designer & Frontend Developer. I design clean interfaces, build scalable front-end, create design systems & prototypes.',
    },
    { name: 'robots', content: 'index,follow' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    {
      property: 'og:title',
      content: 'Diyor Haydarov (alyreniko) – UI/UX Designer & Frontend Developer',
    },
    {
      property: 'og:description',
      content:
        'UI/UX design, front-end development, design systems, prototypes. Portfolio of alyreniko (Diyor Haydarov).',
    },
    { property: 'og:url', content: 'https://alyreniko.page/' },
    {
      property: 'og:image',
      content: 'https://alyreniko.page/og-cover.png',
    },
    {
      property: 'og:image:alt',
      content: 'Brand banner of Diyor Haydarov (alyreniko)',
    },
    { property: 'og:site_name', content: 'alyreniko' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Diyor Haydarov (alyreniko) – UI/UX Designer & Frontend Developer',
    },
    {
      name: 'twitter:description',
      content: 'UI/UX design, front-end development, design systems, prototypes.',
    },
    {
      name: 'twitter:image',
      content: 'https://alyreniko.page/og-cover.png',
    },

    // Цвет/схемы
    // { name: 'theme-color', content: '#BF4040' },
    // { name: 'color-scheme', content: 'light dark' },
  ],
  link: [
    { rel: 'canonical', href: 'https://alyreniko.page/' },

    // Favicons
    { rel: 'shortcut icon', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon/favicon-96x96.png',
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://alyreniko.page/#person',
        name: 'Diyor Haydarov',
        alternateName: ['alyreniko', 'Диёр Хайдаров'],
        url: 'https://alyreniko.page/',
        image: 'https://alyreniko.page/avatar.webp',
        jobTitle: 'UI/UX Designer & Frontend Developer',
        description:
          'UI/UX design, front-end development, design systems, prototypes, interface optimization.',
        knowsAbout: [
          'UI/UX design',
          'Interface design',
          'Design systems',
          'Prototyping',
          'Frontend development',
          'JavaScript',
          'CSS',
          'HTML',
          'Vue.js',
          'Performance optimization',
          'Accessibility',
        ],
        sameAs: ['https://github.com/alyreniko'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Novosibirsk',
          addressCountry: 'RU',
        },
      }),
    },
  ],
});
</script>

<template>
  <Header />
  <Hero />
  <Work />
  <About />
  <Contact />
  <Footer />
</template>
