<script setup>
import BigButton from "../components/BigButton.vue";
import Envelope from "../components/icons/Envelope.vue";
</script>

<template>
  <h1 class="text-center display-1">Login please!</h1>
  <form>
    <div class="mb-3">
      <input
        type="name"
        class="form-control"
        id="floatingInput"
        placeholder="John Smith"
      />
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-group">
      <BigButton>Submit</BigButton>
    </div>
  </form>
</template>
