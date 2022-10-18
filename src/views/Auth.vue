<script setup>
import BigButton from "../components/BigButton.vue";
import LogInForm from "../components/LogInForm.vue";



</script>

<template>
  <div class="background pt-5 pb-5">
  <LogInForm></LogInForm>

 </div>
</template>

<style scoped>
.background{
  height: 900px;
 
  background: rgb(63,94,251);
  background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,0.1856092778908438) 100%);
}
</style>
