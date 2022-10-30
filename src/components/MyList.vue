<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";
const taskStore = useTaskStore();
const userStore = useUserStore();
const { tasks } = storeToRefs(taskStore);

const id = userStore.user.id;
taskStore.fetchTasks(id);

const title = ref("");
const isCompleted = ref(false);
console.log(isCompleted);

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
</script>

<template>
  <div class="container pt-5">
    <p class="pt-5" v-if="!tasks.length">The list is empty, write something!</p>
    <ul class="list-group list-group-flush mt-5">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item"
        :class="{ watched: task.is_complete }"
      >
        <input
          @click="toggleCompleted(task.id)"
          class="form-check-input me-3"
          type="checkbox"
          v-model="task.is_complete"
          id="firstCheckbox"
        />
        <label class="form-check-label" for="firstCheckbox">
          {{ task.title }} completed: {{ task.is_complete }}
        </label>
        <button
          @click="deleteTask(task.id)"
          type="button"
          class="btn btn-outline-dark input-group-append float-end"
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
  opacity: 0.4;
}
</style>
