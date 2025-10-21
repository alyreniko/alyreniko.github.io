<template>
  <header class="flex justify-center items-center gap-8 fixed top-4 w-full mx-auto z-50">
    <a class="btn px-6 py-3 rounded-xl header__link" href="/blog">Blog</a>
    <a class="btn px-6 py-3 rounded-xl header__link" href="#projects">Projects</a>
    <a class="btn px-6 py-2 rounded-xl header__link" href="/">
      <img src="/logo.svg" alt="SiteName logo" />
    </a>
    <a class="btn px-6 py-3 rounded-xl header__link" href="#about">About me</a>
    <a class="btn px-6 py-3 rounded-xl header__link" href="#contact">Contact</a>
  </header>
</template>

<style>
.header__link {
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--color-accent-secondary);
    background-color: var(--color-accent-primary);
    border-color: var(--color-accent-secondary);
  }
  &:active {
    color: var(--color-accent-primary);
    background-color: var(--color-accent-secondary);
    border-color: var(--color-accent-primary);
  }
}
</style>
