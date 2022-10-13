import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import "bootstrap/dist/css/bootstrap.css";

// @ts-ignore
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);

app.mount("#app");
