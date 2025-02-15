<template>
  <div class="chat-room">
    <div class="chat-header">
      <span class="chat-title" :title="title">{{ title }}</span>
      <div class="icon-group">
        <button class="btn btn-light btn-sm" @click="pinRoom">
          <i class="bi bi-pin"></i>
        </button>
        <button class="btn btn-light btn-sm" @click="renameRoom">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-light btn-sm" @click="deleteRoom">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <div class="chat-body">
      <p class="chat-text" :title="content">{{ content }}</p>
    </div>
    <div class="chat-footer">
      <span>Age: {{ footer.age }} | Joined: {{ footer.day }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatRoom",
  props: {
    title: String,
    content: String,
    footer: Object
  },
  methods: {
    pinRoom() {
      alert(`${this.title} pinned!`);
    },
    renameRoom() {
      let newName = prompt("Enter new name:", this.title);
      if (newName) alert(`Renamed to: ${newName}`);
    },
    deleteRoom() {
      if (confirm(`Are you sure you want to delete "${this.title}"?`)) {
        alert("Chat room deleted!");
      }
    }
  }
};
</script>

<style scoped>
.chat-room {
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.chat-header {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 제목과 아이콘 버튼을 양쪽 정렬 */
  gap: 10px; /* 제목과 버튼 사이 간격 */
}

.chat-title {
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
  min-width: 0; /* flex-grow와 함께 말줄임표 적용되도록 설정 */
}

.icon-group {
  display: flex;
  gap: 5px; /* 버튼 간격 */
}

.icon-group button {
  flex-shrink: 0; /* 버튼이 줄어들지 않도록 설정 */
}

.chat-body {
  text-align: left;
}

.chat-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}

.chat-footer {
  text-align: right;
  font-size: 0.9rem;
  color: #777;
}
</style>
