import { createApp } from "vue";
import NavLinks from "./components/NavLinks.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);

const navLinks = createApp(NavLinks);
navLinks.component("font-awesome-icon", FontAwesomeIcon);
navLinks.mount("#nav-links");
