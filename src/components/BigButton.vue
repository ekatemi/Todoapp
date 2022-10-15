<template>
  <div class="d-grid">
    <button
      type="button"
      class="btn btn-primary btn-lg rounded-pill data-bs-toggle='button' form-control"
    >
      <slot></slot>
    </button>
  </div>
</template>
<style scoped>
.btn-primary {
  background-image: linear-gradient(to right, #021031 10%, #7a1919 100%);
}
</style>
