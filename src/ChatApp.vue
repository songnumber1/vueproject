<template>
  <div class="chat-container">
    <Sidebar />
    <div class="chat-main">
      <Header />
      <ChatBody />
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/chat/Sidebar.vue";
import Header from "./components/chat/Header.vue";
import ChatBody from "./components/chat/ChatBody.vue";
import Footer from "./components/chat/Footer.vue";

export default {
  components: {
    Sidebar,
    Header,
    ChatBody,
    Footer,
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  height: 100vh;
}

.chat-main {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}
</style>
