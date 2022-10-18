<template>
  <section class="background">
    <router-view />
    <!-- your routes will load inside of these tags -->
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
</script>

<style scoped></style>
