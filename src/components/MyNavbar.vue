<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore(); /* to take data from pinia */
const router = useRouter();

const handleLogout = async () => {
  console.log("logging out");
  await userStore.signOut();
  router.push("/login");
};
</script>

<template>
  <nav class="navbar navbar-expand-md bg-custom navbar-dark fixed-top px-3">
    <a href="#" class="navbar-brand"> Hello, {{ userStore.user.email }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navmenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse" id="navmenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="handleLogout"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.bg-custom {
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}
</style>
