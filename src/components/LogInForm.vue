<script setup>
import BigButton from "./BigButton.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user";

import { useRouter } from "vue-router";
const router = useRouter();

const userStore = useUserStore(); /* to take data from pinia */
console.log(userStore);
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await userStore.signIn(email.value, password.value);
  console.log("user logged in");
  console.log(userStore);
  if (userStore.user) {
    router.push("/");
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <h2 class="my-4 fw-bold text-center" style="color: #002d62">Log in</h2>
    <div class="form-floating mb-4">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="email"
        required
      />
      <label for="floatingInput validationDefault01">Email address</label>
    </div>
    <div class="form-floating mb-4">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <BigButton>Login</BigButton>
  </form>
</template>
