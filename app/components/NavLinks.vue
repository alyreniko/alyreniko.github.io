<script setup>
import links from "assets/links.json";
</script>

<template>
    <nav>
        <ul>
            <li v-for="(l, i) in links" :key="i">
                <a
                    class="link-card"
                    :href="l.url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span class="link-icon" aria-hidden="true"
                        ><Icon :name="l.icon"
                    /></span>
                    <span class="link-text">
                        <span class="link-title">{{ l.title }}</span>
                        <span class="link-sub">{{ l.subtitle }}</span>
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>
