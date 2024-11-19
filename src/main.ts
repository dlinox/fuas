import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

import vuetify from "@/common/ui/plugins/vuetify";
import permission from "@/common/directives/permissions";
import "./style.css";

import router from "@/app/routes";

const pinia = createPinia();
const app = createApp(App);
app.directive("permission", permission);
app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");

// Oculta el preloader cuando la ventana esté completamente cargada
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hidden");
  }
});
