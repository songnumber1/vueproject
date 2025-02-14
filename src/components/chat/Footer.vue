<template>
  <footer class="footer bg-dark text-white text-center p-3 mt-auto">
    <p class="mb-0">Chat App</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  position: relative;
}

@media (max-width: 768px) {
  .footer p {
    font-size: 14px;
  }
}
</style>
