<script setup>
import { ref } from "vue";
import BigButton from "../components/BigButton.vue";
import LogInForm from "../components/LogInForm.vue";
import LoginText from "../components/LoginText.vue";
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
  <section class="background-radial-gradient overflow-hidden p-4">
    <div class="container text-center text-lg-start mt-sm-2 mt-md-3 mt-lg-5">
      <div class="row gx-lg-5 align-items-center">
        <LoginText></LoginText>
        <div class="col-lg-6 mb-3 mb-lg-0 position-relative">
          <div class="card bg-glass px-2 px-md-4 px-lg-5 py-4">
            <LogInForm v-if="activeLoginForm"></LogInForm>
            <SignupForm v-if="activeSignupForm"></SignupForm>
            <div class="text-center pt-2">
              <hr class="hr" />
              <p>{{ msg }}</p>
            </div>
            <BigButton @click="toggleSignform">{{ btnMsg }}</BigButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-radial-gradient {
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}
.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.95) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
section {
  width: 100vw;
  min-height: 100vh;
}
</style>
