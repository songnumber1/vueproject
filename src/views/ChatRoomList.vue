<template>
  <div class="app-container">
    <div class="sidebar">
      
      <div class="chat-list">
        <ChatRoom 
          v-for="(room, index) in chatRooms" 
          :key="index"
          :title="room.title" 
          :content="room.content" 
          :footer="room.footer"
        />
      </div>
    </div>
    <div class="chat-window">
      <h2>Chat Window</h2>
      <p>Select a chat room from the left.</p>
    </div>
  </div>
</template>

<script>
import ChatRoom from '../components/chat/ChatRoom.vue';
import sampleData from '@/assets/sample_data_with_footer.json'; // JSON 데이터 import

export default {
  name: "App",
  components: {
    ChatRoom
  },
  data() {
    return {
      chatRooms: sampleData // JSON 데이터 사용
    };
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 300px;
  background: #f8f9fa;
  border-right: 1px solid #ddd;
  padding: 10px;
  overflow-y: auto;
  height: 100%;
}

.chat-list {
  height: calc(100vh - 50px);
  overflow-y: auto;
}

.chat-window {
  flex-grow: 1;
  padding: 20px;
}
</style>
