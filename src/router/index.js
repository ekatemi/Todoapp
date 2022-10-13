import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import HomeView from "../views/HomeView.vue";
// @ts-ignore
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: LoginView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // @ts-ignore
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
