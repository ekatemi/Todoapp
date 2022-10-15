<script setup>
import MySearchBar from "../components/MySearchBar.vue";
import { ref } from "vue";

// const genres = ["drama", "comedy", "triller", "romance"];
const listName = "To Watch List";
const items = ref([
  { id: 1, name: "Bladerunner", watched: false },
  { id: 2, name: "Pride and Predjudice", watched: true },
  { id: 3, name: "Hjjj", watched: false },
]);

const newItem = ref("");

const saveItem = () => {
  if (newItem.value) {
    items.value.push({
      id: items.value.length + 1,
      name: newItem.value,
      watched: false,
    });
    newItem.value = "";
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">{{ listName }}</a>
      <!-- <MySearchBar></MySearchBar> -->

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">sort</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <p class="pt-5" v-if="!items.length">The list is empty, add a new item</p>
  <ul class="list-group list-group-flush pt-5">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item"
      :class="{ watched: item.watched }"
    >
      <input
        v-model="item.watched"
        class="form-check-input me-3"
        type="checkbox"
        value=""
        id="firstCheckbox"
      />
      <label class="form-check-label" for="firstCheckbox">
        {{ item.name }}</label
      >
      <button></button>
    </li>
  </ul>

  <form @submit.prevent="saveItem" class="input-new-item">
    <div class="input-group mb-3">
      <input
        v-model.trim="newItem"
        type="text"
        class="form-control"
        placeholder="Add new item"
        aria-describedby="button-addon2"
      />
      <!-- Here should be a dropdown menu to select genre and add to input -->
      <button
        type="button"
        class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li></li>
      </ul>
      <button class="btn btn-outline-dark" id="button-addon2">Add</button>
    </div>
  </form>
</template>

<style scoped>
.watched {
  opacity: 0.5;
}
</style>
