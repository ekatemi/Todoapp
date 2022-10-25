<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";

const taskStore = useTaskStore();
const userStore = useUserStore();

const { tasks } = storeToRefs(taskStore);

const id = userStore.user.id;
console.log(id);
const watched = taskStore.tasks.is_completed;

const title = ref("");
taskStore.fetchTasks(id);

const addTask = async () => {
  console.log(id, title.value);
  await taskStore.createTask(id, title.value);
  await taskStore.fetchTasks(id);
  title.value = "";
};

const deleteTask = async () => {
  await taskStore.deleteTask();
};
</script>

<template>
  <div class="container pt-5">
    <p class="pt-5" v-if="!tasks.length">The list is empty, add a new item</p>
    <ul class="list-group list-group-flush mt-5">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item"
        :class="{ watched: task.watched }"
      >
        <input
          v-model="task.watched"
          class="form-check-input me-3"
          type="checkbox"
          value=""
          id="firstCheckbox"
        />
        <label class="form-check-label" for="firstCheckbox">
          {{ task.title }}
        </label>
        <button
          @click="deleteTask"
          type="button"
          class="btn btn-outline-dark input-group-append"
        >
          Delete
        </button>
      </li>
    </ul>
    <form @submit.prevent="addTask" class="input-new-item">
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
  </div>
</template>

<style scoped>
.watched {
  opacity: 0.5;
}
</style>
