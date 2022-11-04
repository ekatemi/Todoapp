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
const errorMsg = ref(null);

const handleLogin = async () => {
  try {
    await userStore.signIn(email.value, password.value);
    if (userStore.user) {
      router.push("/");
    }
  } catch (error) {
    // alert(error.message);
    errorMsg.value = "The password is not correct";
    setTimeout(() => {
      errorMsg.value = null;
    }, 2000);
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <h2 class="mb-3 fw-bold text-center" style="color: #002d62">Log in</h2>
    <div class="form-floating mb-4">
      <input
        type="email"
        class="form-control form-control-sm"
        id="floatingInput"
        placeholder=".form-control-sm"
        v-model="email"
        required
      />
      <label for="floatingInput validationDefault01">Email address</label>
    </div>
    <div class="form-floating mb-4">
      <input
        type="password"
        class="form-control form-control-sm"
        id="floatingPassword"
        placeholder=".form-control-sm"
        v-model="password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <p class="error">{{ errorMsg }}</p>
    <BigButton>Login</BigButton>
  </form>
</template>

<style scoped>
.error {
  color: red;
}
</style>
