import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import Auth from "../views/Auth.vue";
import EmailConfirm from "../views/EmailConfirm.vue";
import { useUserStore } from "../stores/user";

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
      path: "/login",
      name: "login",
      component: Auth,
    },
    {
      path: "/email-confirmation",
      name: "email-confirmation",
      component: EmailConfirm,
    },
  ],
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const loginUrl = "/login";
  const mailConfirmUrl = "/email-confirmation";
  const publicPages = [loginUrl, mailConfirmUrl];
  console.log(publicPages);
  console.log(loginUrl);
  const authRequired = !publicPages.includes(to.path);
  const $store = useUserStore();

  if (authRequired) {
    if ($store.user) return;
    return loginUrl;
  }
});

export default router;
