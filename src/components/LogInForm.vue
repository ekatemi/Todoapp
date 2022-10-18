<script setup>
import BigButton from "./BigButton.vue";
import { onMounted } from "vue";
import {ref} from 'vue'
import {useUserStore} from "../stores/user"


const userStore = useUserStore();


const userLogged = ref(!true)
const email = ref("");
const password = ref("");

onMounted(async () => {

try {
  await userStore.logIn(); // here we call fetch user
  if (!user.value) {
    // redirect them to logout if the user is not there

    router.push({ path: "/auth" });
  } else {
    // continue to dashboard
    router.push({ path: "/" });
  }
} catch (e) {
  console.log(e);
}
});

</script>

<template>
    <button @onclick="userLogged = !userLogged">toggle</button>
    <!-- Log in -->
<div v-if="userLogged">
  <div class="card mx-auto p-5" style="width: 26rem;">
    <h1 class="text-center mb-5">Log in</h1>
     
    <form @submit.prevent="handleLogin">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            {{email.value}}
        </div>
        <div class="form-floating mb-3">
             <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        <BigButton>Login</BigButton>
        <div class="text-center pt-4">
            <p>Don´t have an account yet?</p>
        </div>
    </form>
    <BigButton>Sign Up</BigButton>
    </div>
</div>

<!-- Sign up -->
<div v-else>
    <div class="card mx-auto p-5" style="width: 26rem;">
        <h1 class="text-center mb-5">Sign Up</h1>
         <form>
            <div class="form-floating mb-3">
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control"  placeholder="Password">
                 <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control"  placeholder="Repeat password">
                <label for="floatingPassword">Repeat password</label>
            </div>
            <BigButton>Submit</BigButton>
        </form>
    </div>
</div>
</template>