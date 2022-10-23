<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";

const taskStore = useTaskStore();
const userStore = useUserStore();

const { tasks } = storeToRefs(taskStore);

console.log(userStore.data);

const id = userStore.user.id;
const title = ref(tasks.value);

const newItem = ref("");

// const tasks = ref([{ id: id, title: title }]);

const fetchTasks = async () => {};

const addTask = async () => {
  await taskStore.createTask(id, title);
};
</script>

<template>
  <div class="container pt-5">
    <ul class="list-group list-group-flush mt-5">
      <li v-for="task in tasks" :key="id" class="list-group-item"></li>
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
