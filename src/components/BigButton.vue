<template>
  <div class="d-grid">
    <button
    type="submit"
      class="btn btn-primary btn-lg rounded-pill data-bs-toggle='button' form-control"
    >
      <slot></slot>
    </button>
  </div>
</template>
<style scoped>
.btn-primary {
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 44%, rgba(252,176,69,1) 100%);
}
</style>



