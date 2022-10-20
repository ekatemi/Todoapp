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
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Hello, {{ userStore.user.email }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="toggleMobileMenu">
        <ul class="navbar-nav">
          <li>
            <a href="#" class="nav-link">About</a>
          </li>
          <li>
            <a href="#" class="nav-link">List</a>
          </li>
          <li>
            <a href="#" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
section .background {
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}
</style>
