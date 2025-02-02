<template>
  <div class="sidebar">
    <h3>Chats</h3>
    <ul>
      <li v-for="chat in chats" :key="chat.id">{{ chat.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #f4f4f4;
  padding: 20px;
  border-right: 1px solid #ddd;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  cursor: pointer;
}
li:hover {
  background: #ddd;
}
</style>
