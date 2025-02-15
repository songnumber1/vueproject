<template>
  <div class="container mt-4">
    <ChatCard />
  </div>
</template>

<script>
import ChatCard from '../components/chat/ChatCard.vue';

export default {
  name: "App",
  components: {
    ChatCard
  }
};
</script>
