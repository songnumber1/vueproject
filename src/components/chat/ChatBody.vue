<template>
  <div
    class="chat-body p-3"
    style="height: calc(100% - 120px); overflow-y: auto"
  >
    <!-- Chat messages -->
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="chat-message mb-2"
      :class="{
        sender: message.sender === 'self',
        receiver: message.sender === 'other',
      }"
    >
      <div class="message">
        <strong>{{ message.user }}:</strong> {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "", // 새로운 메시지
      messages: [
        { user: "John Doe", sender: "other", text: "Hello, how are you?" }, // 수신자 메시지
        { user: "You", sender: "self", text: "I am fine, thank you!" }, // 송신자 메시지
      ], // 채팅 메시지 목록
    };
  },
  methods: {
    // 메시지 전송
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({
          user: "You", // 송신자 이름
          sender: "self", // 송신자
          text: this.newMessage,
        });
        this.newMessage = ""; // 메시지 전송 후 입력창 비우기
        this.$nextTick(() => {
          // 새로운 메시지가 추가된 후 스크롤을 맨 아래로 이동
          const chatBody = this.$el.querySelector(".chat-body");
          //chatBody.scrollTop = chatBody.scrollHeight;
        });
      }
    },
  },
};
</script>

<style scoped>
.chat-body {
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: auto; /* 스크롤 가능 */
  height: 100%; /* 부모 요소에 맞게 채워짐 */
}

.chat-message {
  display: flex;
  align-items: flex-start;
}

.sender {
  justify-content: flex-end; /* 송신자 메시지 오른쪽 정렬 */
  text-align: right;
}

.receiver {
  justify-content: flex-start; /* 수신자 메시지 왼쪽 정렬 */
  text-align: left;
}

.message {
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  word-wrap: break-word;
}

.sender .message {
  background-color: #007bff;
  color: white;
}

.receiver .message {
  background-color: #e9ecef;
}

input[type="text"] {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
}
</style>
