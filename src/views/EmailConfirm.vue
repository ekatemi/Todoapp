<script setup>
import LogInForm from "../components/LogInForm.vue";
</script>

<template>
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style="color: hsl(218, 81%, 95%)"
          >
            Thank you <br />
            <span style="color: hsl(218, 81%, 75%)">for sign up!</span>
          </h1>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div class="card bg-glass px-3 px-sm-4 px-md-5 py-5">
            <LogInForm></LogInForm>
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
