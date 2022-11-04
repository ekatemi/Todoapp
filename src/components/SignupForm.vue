<script setup>
import BigButton from "./BigButton.vue";
import { ref } from "vue";
import { useUserStore } from "../stores/user.js";
const userStore = useUserStore();

const email = ref("");
const password = ref("");
const passwordRepeat = ref("");
const passwordErr = ref(null);
const successSignupMsg = ref(false);
// async
const handleSubmit = async () => {
  if (password.value === passwordRepeat.value) {
    await userStore.signUp(email.value, password.value);
    successSignupMsg.value = true;
  } else {
    passwordErr.value = "Passwords do not match";
    setTimeout(() => {
      passwordErr.value = null;
    }, 5000);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="mb-3 fw-bold text-center" style="color: #002d62">Sign Up</h2>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control .form-control-sm"
        id="floatingInput"
        placeholder=".form-control-sm"
        v-model="email"
        aria-describedby="emailHelp"
        required
      />
      <label for="floatingInput">Email address</label>
      <div id="emailHelp" class="form-text">
        We will never share your email with anybody
      </div>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control form-control-sm"
        id="floatingPassword"
        placeholder=".form-control-sm"
        aria-describedby="passwordHelp"
        v-model="password"
        required
      />
      <label for="floatingPassword">Password</label>
      <div id="passwordHelp" class="form-text">
        Password should be minimum 6 characters long
      </div>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control form-control-sm"
        id="floatingPassword1"
        placeholder="Repeat password"
        v-model="passwordRepeat"
        required
      />
      <label for="floatingPassword1">Repeat password</label>
      <p class="error text-center">
        {{ passwordErr }}
      </p>
      <p>
        {{ successSignupMsg ? "Please, check your email and confirm it" : "" }}
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
