<template>
  <div class="card small-card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <span>Small size card</span>
      <div class="icon-group">
        <button class="btn btn-light btn-sm" @click="pinCard">
          <i class="bi bi-pin"></i>
        </button>
        <button class="btn btn-light btn-sm" @click="renameCard">
          <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-light btn-sm" @click="deleteCard">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">card content</p>
      <p class="card-text">card content</p>
      <p class="card-text">card content</p>
    </div>
    <div class="card-footer text-center">
      Footer Content
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatCard",
  methods: {
    pinCard() {
      alert("Pinned!");
    },
    renameCard() {
      let newName = prompt("Enter new name:");
      if (newName) alert(`Renamed to: ${newName}`);
    },
    deleteCard() {
      if (confirm("Are you sure you want to delete this card?")) {
        alert("Card deleted!");
      }
    }
  }
};
</script>

<style scoped>
.small-card {
  width: 300px;
}
.icon-group button {
  margin-left: 5px;
}
</style>
