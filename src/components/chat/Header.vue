<template>
  <div class="header">
    <span class="title">Title</span>
    <div class="header-right">
      <span class="name">John Doe</span>
      <span class="department">Sales</span>
      <button class="settings">⚙️</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 15px;
}

.icon {
  font-size: 20px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.title .name,
.department {
  font-size: 14px;
}

.settings {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
}
</style>
