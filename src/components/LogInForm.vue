<script setup>
import BigButton from "./BigButton.vue";
import { onMounted } from "vue";
import {ref} from 'vue'
import {useUserStore} from "../stores/user"


const userStore = useUserStore();


const userExists = ref(false)


const email = ref("");
const password = ref("");
const password1 = ref("");
const handleLogin = () => {
  signIn(email, password)
}

const handleSignup = (email, password) => {
  if (email.length || password.value === password1.value) {
    console.log("you are signed up")
} else {
  console.log("error")
}
}

</script>

<template>
    <button @onclick="userLogged = !userLogged">toggle</button>
    <!-- Log in -->
<div v-if="userExists">
  <div class="card mx-auto p-5" style="width: 26rem;">
    <form @submit.prevent="handleLogin">
      <h1 class="text-center mb-5">Log in</h1>  
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required>
            <label for="floatingInput validationDefault01">Email address</label>
        </div>
        <div class="form-floating mb-5">
             <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required>
            <label for="floatingPassword">Password</label>
        </div>
        <BigButton>Login</BigButton>
      </form>
      <div class="text-center pt-2">
        <hr class="hr pt-3" />
          <p>Don´t have an account yet?</p>
      </div>
    <BigButton @onclick="userLogged = !userLogged">Sign Up</BigButton>
    </div>
</div>

<!-- Sign up -->
<div v-else>
    <div class="card mx-auto p-5" style="width: 26rem;">
      <form @submit.prevent="handleSignup">
        <h1 class="text-center mb-5">Sign Up</h1>
            <div class="form-floating mb-3">
                 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required>
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control"  placeholder="Password" v-model="password" required>
                 <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-5">
                <input type="password" class="form-control"  placeholder="Repeat password" v-model="password1" required>
                <label for="floatingPassword">Repeat password</label>
            </div>
            <BigButton>Submit</BigButton>
          </form>
          <div class="text-center pt-2">
            <hr class="hr pt-3" />
          <p>Have an account?</p>
          <p>email:{{email}}</p>
          <p>password: {{password}}</p>
      
      
        </div>
          <BigButton @onclick="userLogged = !userLogged">Sign In</BigButton>
    </div>
</div>
</template>