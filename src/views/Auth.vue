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
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            The best app <br />
            <span style="color: hsl(218, 81%, 75%)">to track your movies</span>
          </h1>
          <p class="mb-4 opacity-80" style="color: hsl(218, 81%, 85%)">
            Save, sort, edit your lists of films, series and shows
          </p>
      </div>
 
      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
       <div class="card bg-glass px-3 px-sm-5 py-5">
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
      background-color: hsla(0, 0%, 100%, 0.950) !important;
      backdrop-filter: saturate(200%) blur(25px);
    }
  
  section {
    width: 100vw;
    min-height: 100vh;
    }
</style>
