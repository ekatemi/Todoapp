import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

import Auth from "../views/Auth.vue";
import { useUserStore } from "../stores/user";

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {authRequired: true}, 
    },
    {
      path: "/login",
      name: "login",
      component: Auth,
    },
  ],
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loginUrl = "/login";
  const publicPages = [loginUrl];
  const authRequired = !publicPages.includes(to.path.meta);
  const $store = useUserStore();

  if (authRequired) {
    if ($store.user) return;
    return loginUrl;
  } 
});

export default router;


