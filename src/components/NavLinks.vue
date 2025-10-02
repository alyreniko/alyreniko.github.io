<script setup>
import links from "../assets/links.json";

console.log(links);
</script>

<template>
    <ul>
        <li v-for="(l, i) in links" :key="i">
            <a
                class="link-card"
                :href="l.url"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span class="link-icon" aria-hidden="true"
                    ><font-awesome-icon :icon="l.icon"
                /></span>
                <span class="link-text">
                    <span class="link-title">{{ l.title }}</span>
                    <span class="link-sub">{{ l.subtitle }}</span>
                </span>
            </a>
        </li>
    </ul>
</template>
