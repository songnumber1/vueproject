<template>
  <div class="app-container">
    <NoticeTable :notices="noticeList" />
  </div>
</template>

<script>
import NoticeTable from '../components/chat/NoticeTable.vue';
import noticeData from '@/assets/notice_data.json'; // JSON 데이터 불러오기

export default {
  name: "App",
  components: {
    NoticeTable
  },
  data() {
    return {
      noticeList: [] // 초기 배열 설정
    };
  },
  created() {
    this.loadNotices();
  },
  methods: {
    loadNotices() {
      this.noticeList = noticeData; // JSON 데이터를 state에 저장
    }
  }
};
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
