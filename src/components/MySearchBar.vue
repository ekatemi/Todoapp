<template>
  <input type="text" v-model="input" placeholder="Search films..." />
  <div class="item film" v-for="item in filteredList()" :key="item">
    <p>{{ item }}</p>
  </div>
  <div class="item error" v-if="input && !filteredList().length">
    <p>No results found!</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
let input = ref("");
const fruits = ["apple", "banana", "orange"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>
