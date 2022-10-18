<script setup>
import BigButton from "./BigButton.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user.js";

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const passwordRepeat = ref("");
const passwordErr = ref(false);

const handleSubmit = () => {
  if (password.value === passwordRepeat.value) {
    userStore.signUp(email.value, password.value);
    console.log("success sign up");
  } else {
    console.log("password error");
    passwordErr.value = true;
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="text-center mb-3">Sign Up</h2>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="email"
        required
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="Repeat password"
        v-model="passwordRepeat"
        required
      />
      <label for="floatingPassword">Repeat password</label>
      <p class="error text-center">
        {{ passwordErr ? "Password don't match" : "" }}
        <!-- how to clear it? -->
      </p>
    </div>
    <BigButton>Submit</BigButton>
  </form>
</template>

<style scoped>
.error {
  color: red;
}
</style>
