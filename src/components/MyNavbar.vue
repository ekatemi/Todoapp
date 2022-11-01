<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore(); /* to take data from pinia */
const router = useRouter();

const handleLogout = async () => {
  console.log("logging out");
  await userStore.signOut();
  router.push("/login");
};
// experiment start
const isActive = ref(false);

const toggleHamburgerMenu = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <header>
    <nav class="navbar">
      <a href="#" class="navbar-brand fw-bold nav-link"
        >TodoApp <br /><span>Hello, {{ userStore.user.email }}</span></a
      >

      <ul
        class="nav-menu"
        :class="[{ active: isActive }]"
        style="z-index: 1000"
      >
        <li class="nav-item">
          <RouterLink to="/" @click="handleLogout" class="nav-link pt-3">
            Log out
          </RouterLink>
        </li>
      </ul>
      <!-- Hamburger menu icon -->
      <div
        @click="toggleHamburgerMenu"
        :class="['hamburger', { active: isActive }]"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(to right, #a615a4 0%, #2575fc 100%);
}

li {
  list-style: none;
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.navbar {
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.nav-link:hover {
  text-decoration: none;
  opacity: 0.5;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: #fff;
  border-radius: 0.3rem;
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    left: -110%;
    top: 69px;
    gap: 5;
    flex-direction: column;
    background: linear-gradient(to right, #a615a4 0%, #2575fc 100%);
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }

  .nav-item {
    margin: 1rem 0;
  }

  .nav-menu.active {
    left: 0;
  }
}
</style>
linear-gradient(to right, #a615a4 0%, #2575fc 100%);
