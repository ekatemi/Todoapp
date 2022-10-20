<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";
const taskStore = useTaskStore();

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
  <p class="pt-5" v-if="!items.length">The list is empty, add a new item</p>
  <ul class="list-group list-group-flush mt-5">
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
        <li>fnfh</li>
        <li>fnfh</li>
        <li>fnfh</li>
        <li>fnfh</li>
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
