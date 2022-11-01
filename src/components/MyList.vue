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

const toggleCompleted = async (task) => {
  await taskStore.toggleCompleted(task.id, task.is_complete);
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
      <div class="input-group mb-2">
        <input
          v-model.trim="title"
          type="text"
          class="form-control"
          placeholder="Add new item"
        />
        <button class="btn btn-outline-dark" id="button-addon2">Add</button>
      </div>
    </form>
    <div
      class="container d-flex justify-content-around align-items-center py-3"
      v-if="!tasks.length"
    >
      <img
        class="d-flex"
        src="src\assets\pictures\Lisa.png"
        alt="Lisa"
        style="width: 30%"
      />
      <div class="d-flex">
        <h3 class="fw-bold" style="color: blueviolet">
          It´s empty, write something here!
        </h3>
      </div>
    </div>
    <ul v-cloak class="list-group list-group-flush">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item"
        :class="{ watched: task.is_complete }"
      >
        <input
          @change="toggleCompleted(task)"
          class="form-check-input me-3"
          type="checkbox"
          v-model="task.is_complete"
          id="firstCheckbox"
        />
        <label v-cloak> {{ task.title }} </label>

        <button
          @click="deleteTask(task.id)"
          type="button"
          class="btn btn-outline-dark rounded-pill input-group-append float-end"
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
