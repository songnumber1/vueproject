<template>
  <div id="app" class="d-flex flex-column h-100">
    <!-- Header -->

    <div class="d-flex flex-grow-1">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content Area -->
      <div class="flex-grow-1 d-flex flex-column">
        <Header />
        <!-- Chat Body -->
        <ChatBody ref="chatBody" />

        <!-- Chat Input Area -->
        <div class="p-3 bg-light">
          <input
            v-model="newMessage"
            @keyup.enter="sendMessage"
            type="text"
            class="form-control"
            placeholder="Type a message..."
          />
        </div>

        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/chat/Header.vue";
import Sidebar from "./components/chat/Sidebar.vue";
import Footer from "./components/chat/Footer.vue";
import ChatBody from "./components/chat/ChatBody.vue";

export default {
  components: {
    Header,
    Sidebar,
    Footer,
    ChatBody,
  },
  data() {
    return {
      newMessage: "", // 새로운 메시지를 저장하는 변수
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        // 메시지를 전송하기 전에 메시지 목록에 추가
        this.$refs.chatBody.messages.push({
          user: "John Doe", // 사용자 이름
          text: this.newMessage,
        });
        this.newMessage = ""; // 입력 필드 초기화
      }
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.d-flex {
  display: flex;
}

.flex-grow-1 {
  flex-grow: 1;
}
</style>
