<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<template>
  <section class="background">
    <router-view />
    <!-- your routes will load inside of these tags -->
  </section>
</template>

<style scoped></style>
