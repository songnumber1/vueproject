<template>
  <div class="chat-body">
    <!-- 채팅 메시지 목록 -->
    <div class="messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', message.sender === 'me' ? 'sent' : 'received']"
      >
        {{ message.text }}
      </div>
    </div>

    <!-- 입력 폼 (하단 고정) -->
    <div class="chat-input">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type a message..."
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">📩</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { id: 1, sender: "me", text: "Hello!" },
        { id: 2, sender: "other", text: "Hi there!" },
      ],
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "") return;

      this.messages.push({
        id: this.messages.length + 1,
        sender: "me",
        text: this.newMessage,
      });

      this.newMessage = ""; // 입력창 초기화
      this.scrollToBottom();
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const messagesContainer = this.$el.querySelector(".messages");
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      });
    },
  },
};
</script>

<style scoped>
.chat-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  background: #e9ecef;
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}

.message {
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  max-width: 60%;
}

.sent {
  background: #007bff;
  color: white;
  align-self: flex-end;
}

.received {
  background: white;
  border: 1px solid #ddd;
  align-self: flex-start;
}

/* 입력창 스타일 */
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  background: white;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.chat-input button {
  margin-left: 10px;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-input button:hover {
  background: #0056b3;
}
</style>
