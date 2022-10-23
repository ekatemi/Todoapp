<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";
import MyNavbar from "../components/MyNavbar.vue";
import MyList from "../components/MyList.vue";
</script>

<template>
  <MyNavbar></MyNavbar>
  <MyList></MyList>
</template>

<style scoped></style>
