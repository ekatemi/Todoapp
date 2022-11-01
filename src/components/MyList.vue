<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import BigButtonVue from "./BigButton.vue";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";
const taskStore = useTaskStore();
const userStore = useUserStore();
const { tasks } = storeToRefs(taskStore);

const id = userStore.user.id;
taskStore.fetchTasks(id);

const title = ref("");
const isCompleted = ref(false);

const addTask = async () => {
  await taskStore.createTask(id, title.value);
  await taskStore.fetchTasks(id);
  title.value = "";
};

const deleteTask = async (taskId) => {
  await taskStore.deleteTask(taskId);
  await taskStore.fetchTasks(id);
};

const toggleCompleted = async (taskId) => {
  isCompleted.value = !isCompleted.value;
  await taskStore.toggleCompleted(taskId, isCompleted.value);
  await taskStore.fetchTasks(id);
};
const deleteCompleted = async () => {
  await taskStore.deleteCompleted(id);
  await taskStore.fetchTasks(id);
};

/* const editTitle = async (taskId) => {
  await taskStore.editTitle(taskId, title.value);
  await taskStore.fetchTasks(id);
}; */
</script>

<template>
  <div class="container py-5 h-100 min-vw-50">
    <form @submit.prevent="addTask" class="input-new-item pt-5">
      <div class="input-group mb-3">
        <input
          v-model.trim="title"
          type="text"
          class="form-control"
          placeholder="Add new item"
        />
        <button class="btn btn-outline-dark" id="button-addon2">Add</button>
      </div>
    </form>
    <p class="pt-5" v-if="!tasks.length">The list is empty, write something!</p>
    <ul v-cloak class="list-group list-group-flush">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item"
        :class="{ watched: task.is_complete }"
      >
        <input
          @change="toggleCompleted(task.id)"
          class="form-check-input me-3"
          type="checkbox"
          v-model="task.is_complete"
          id="firstCheckbox"
        />
        <label v-cloak> {{ task.title }} </label>
        <button
          @click="deleteTask(task.id)"
          type="button"
          class="btn btn-outline-dark input-group-append float-end"
        >
          Delete
        </button>
      </li>
    </ul>
    <BigButtonVue @click="deleteCompleted()">Delete completed</BigButtonVue>
  </div>
</template>

<style scoped>
.watched {
  opacity: 0.4;
}

[v-cloak] {
  display: none;
}
</style>
