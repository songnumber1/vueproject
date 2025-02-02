<template>
  <div class="header">
    <!-- 좌측 타이틀 -->
    <span class="title">Chat App</span>

    <!-- 우측 영역 -->
    <div class="right-section">
      <span class="name">홍길동</span>
      <span class="department">개발팀</span>

      <div class="settings-container">
        <!-- Font Awesome 아이콘을 사용 -->
        <button class="settings" @click="toggleMenu">
          <i class="fa fa-cogs"></i>
          <!-- 아이콘 -->
        </button>
        <ul v-if="menuOpen" class="dropdown-menu">
          <li @click="selectMenu('terms')">개인 약관</li>
          <li @click="selectMenu('notice')">공지 사항 보기</li>
          <li @click="logout">로그아웃</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    selectMenu(menu) {
      alert(`선택한 메뉴: ${menu}`);
      this.menuOpen = false; // 메뉴 선택 후 닫기
    },
    logout() {
      alert("로그아웃 되었습니다.");
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 좌측 타이틀, 우측 유저 정보 정렬 */
  padding: 15px;
  background: #007bff;
  color: white;
  font-weight: bold;
  position: relative;
}

/* 좌측 타이틀 스타일 */
.title {
  font-size: 20px;
  font-weight: bold;
}

/* 우측 유저 정보 스타일 */
.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.name,
.department {
  font-size: 16px;
}

.settings-container {
  position: relative;
}

.settings {
  background: none;
  border: none;
  font-size: 24px; /* 아이콘 크기 */
  cursor: pointer;
  color: white;
  transition: transform 0.3s ease;
}

/* 아이콘 호버 효과 */
.settings:hover {
  transform: scale(1.2); /* 아이콘 확대 효과 */
}

/* 드롭다운 메뉴 스타일 */
.dropdown-menu {
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  color: black;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 150px;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
}

.dropdown-menu li:hover {
  background: #f1f1f1;
}
</style>
