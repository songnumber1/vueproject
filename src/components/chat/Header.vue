<template>
  <div
    class="header d-flex justify-content-between align-items-center bg-primary text-white p-3"
  >
    <div class="d-flex flex-column flex-sm-row">
      <h1 class="mb-0">Chat App</h1>
    </div>
    <div class="d-flex flex-column flex-sm-row align-items-center">
      <span class="me-2">John Doe</span>
      <span>HR Department</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #007bff;
  color: white;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 18px;
  }

  .header span {
    font-size: 14px;
  }
}
</style>
