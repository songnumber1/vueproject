<template>
  <div class="notice-container">
    <h2>공지 사항</h2>
    <div class="table-wrapper">
      <table class="notice-table">
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notice, index) in notices" :key="index">
            <td>{{ notice.title }}</td>
            <td>{{ notice.author }}</td>
            <td>{{ notice.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeTable",
  props: {
    notices: Array
  }
};
</script>

<style scoped>
.notice-container {
  width: 100%;
  padding: 20px;
}

.table-wrapper {
  max-height: 400px; /* 테이블 높이 고정 */
  overflow-y: auto; /* 세로 스크롤 허용 */
  border: 1px solid #ddd; /* 테이블 외곽선 */
}

.notice-table {
  width: 100%;
  border-collapse: collapse;
}

.notice-table th, .notice-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  white-space: nowrap; /* 긴 텍스트 줄바꿈 방지 */
}

.notice-table th {
  background-color: #f4f4f4;
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
