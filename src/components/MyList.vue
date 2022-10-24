<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";
const taskStore = useTaskStore();
const userStore = useUserStore();
const { tasks } = storeToRefs(taskStore);

taskStore.fetchTasks()

const id = userStore.user.id;
const title = ref("");


const fetchTasks = async () => {
  await taskStore.fetchTasks()
};
// let tasks = taskStore.tasks;

const addTask = async () => {
  console.log(id, title)
  await taskStore.createTask(id, title.value);
  await taskStore.fetchTasks()
 

};

</script>

<template>
  <div class="container pt-5">
    <ul class="list-group list-group-flush mt-5">
      <li v-for="task in tasks" :key="id" class="list-group-item">{{task.title}}</li>
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
