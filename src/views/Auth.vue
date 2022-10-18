<script setup>
import { ref } from "vue";
import BigButton from "../components/BigButton.vue";
import LogInForm from "../components/LogInForm.vue";
import SignuoForm from "../components/SignupForm.vue";
import SignupForm from "../components/SignupForm.vue";

const activeSignupForm = ref(false);
const activeLoginForm = ref(true);
const btnMsg = ref("Sign up");
const msg = ref("Don´t have an account yet?");

const toggleSignform = () => {
  activeSignupForm.value = !activeSignupForm.value;
  activeLoginForm.value = !activeLoginForm.value;
  if (activeSignupForm.value) {
    btnMsg.value = "Log in";
    msg.value = "Registered user?";
  } else {
    btnMsg.value = "Sign up";
    msg.value = "Don´t have an account yet?";
  }
};
</script>

<template>
  <div class="container-md mx-auto p-5 mt-4" style="width: 26rem">
    <LogInForm v-if="activeLoginForm"></LogInForm>
    <SignupForm v-if="activeSignupForm"></SignupForm>
    <div class="text-center pt-2">
      <hr class="hr" />
      <p>{{ msg }}</p>
    </div>
    <BigButton @click="toggleSignform">{{ btnMsg }}</BigButton>
  </div>
</template>

<style scoped>
.container-md {
  background-color: white;
  border-radius: 0.3em;
  box-shadow: 0px 0px 56px -1px rgba(0, 0, 0, 0.42);
}
</style>
