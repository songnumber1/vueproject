<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div v-for="(item, index) in userList" :key="index">
        <span style="
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break:break-all;
          width: 100px"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          @mouseover="showTooltip"
          @mouseleave="hideTooltip"
          >{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap";

export default {
  name: "HomeView",
  data() {
    return {
      userList: [],
    }
  },
  mounted() {
    this.axiosCall();
  },
  methods: {
    axiosCall() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
          this.userList = res.data;
        });
    },

    showTooltip(e) {
       if (e.target.clientWidth >= e.target.scrollWidth) {
        return;
      }

      e.target.setAttribute('title', e.target.innerText);

      new Tooltip(e.target).show();
    },

    // 툴팁 숨김
    hideTooltip(e) {
      e.target.removeAttribute('title');
      new Tooltip(e.target).hide();
    },
  },
};
</script>
