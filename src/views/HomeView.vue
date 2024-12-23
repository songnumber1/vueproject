<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <button
      ref="info"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Tooltip on right"
      @mouseover="showTooltip"
      @mouseleave="hideTooltip"
    >
      Hover over me
    </button>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap";

export default {
  name: "HomeView",
  mounted() {
    this.axiosCall();
  },
  methods: {
    axiosCall() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
        });
    },

    showTooltip(e) {
      new Tooltip(e.target).show();
    },

    // 툴팁 숨김
    hideTooltip(e) {
      new Tooltip(e.target).hide();
    },
  },
};
</script>
