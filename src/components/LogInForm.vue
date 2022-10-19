<script setup>
import BigButton from "./BigButton.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore(); /* to take data from pinia */

const email = ref("");
const password = ref("");

const handleLogin = () => {
  userStore.signIn(email.value, password.value);
  console.log("user logged in");
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <h2 class="text-center mb-3">Log in</h2>
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
