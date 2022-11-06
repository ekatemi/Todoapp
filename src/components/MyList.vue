<script setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import BigButtonVue from "./BigButton.vue";
import CancelIcon from "../assets/icons/CancelIcon.vue";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";
const taskStore = useTaskStore();
const userStore = useUserStore();
const { tasks } = storeToRefs(taskStore);
const id = userStore.user.id;
taskStore.fetchTasks(id);
const title = ref("");
console.log(title);

const addTask = async () => {
  await taskStore.createTask(id, title.value);
  await taskStore.fetchTasks(id);
  title.value = "";
};
const deleteTask = async () => {
  await taskStore.deleteTask();
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
const editTitle = async (task) => {
  await taskStore.editTitle(task.id, task.title);
  await taskStore.fetchTasks(id);
};
const onCancel = async () => {
  await taskStore.fetchTasks(id);
};
</script>

<template>
  <div class="container py-5 h-100 min-vw-50 px-lg-5">
    <!-- add task -->
    <form @submit.prevent="addTask" class="input-new-item pt-5">
      <div class="input-group mb-2">
        <input
          v-model.trim="title"
          type="text"
          class="form-control form-control-lg"
          placeholder="Add new item"
        />
        <button
          :disabled="title.length === 0"
          class="btn btn-outline-dark"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
    <!-- if the list is empty  -->
    <div
      class="container d-flex justify-content-around align-items-center py-3"
      v-if="!tasks.length"
    >
      <img
        class="d-flex"
        src="../assets/pictures/Lisa.png"
        alt="Lisa"
        style="width: 30%"
      />
      <div class="d-flex">
        <h3 class="fw-bold" style="color: blueviolet">
          It´s empty, write something here!
        </h3>
      </div>
    </div>
    <!-- list item rendering -->
    <ul v-cloak class="list-group list-group-flush">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item"
        :class="{ completed: task.is_complete }"
      >
        <div>
          <div v-if="!task.edit">
            <input
              @change="toggleCompleted(task)"
              class="form-check-input me-3"
              type="checkbox"
              v-model="task.is_complete"
              id="firstCheckbox"
            />

            <label
              class="text-wrap"
              v-if="!task.edit"
              @click="task.edit = !task.edit"
              >{{ task.title }}
            </label>
            <button
              @click="deleteTask(task.id)"
              type="button"
              class="btn btn-outline-dark rounded-pill input-group-append float-end"
            >
              Delete
            </button>
          </div>

          <form
            v-if="task.edit"
            class="input-group-text"
            @submit.prevent="editTitle(task)"
          >
            <input
              class="form-control"
              type="text"
              autocomplete="off"
              v-model.trim="task.title"
            />
            <div class="btn-group">
              <button type="button" class="btn" @click="onCancel">
                <CancelIcon></CancelIcon>
              </button>
              <button type="submit" class="btn">Save</button>
            </div>
          </form>
        </div>
      </li>
    </ul>
    <BigButtonVue @click="deleteCompleted()">Delete completed</BigButtonVue>
  </div>
</template>

<style scoped>
.completed {
  opacity: 0.4;
}

.input-group-text {
  background-color: white;
  border: none;
}

#button-addon2 {
  background: linear-gradient(
    90deg,
    rgba(253, 29, 29, 1) 44%,
    rgba(252, 176, 69, 1) 100%
  );
}
</style>
