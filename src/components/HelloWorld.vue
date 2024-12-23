<template>
  <div class="container mt-5">
    <button
      ref="tooltipButton"
      class="btn btn-primary"
      title="This is a tooltip!"
      @mouseover="showTooltip"
      @mouseleave="hideTooltip"
    >
      Hover over me
    </button>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  mounted() {},
  methods: {
    showTooltip() {
      if (tooltipInstance) tooltipInstance.show();
    },

    // 툴팁 숨김
    hideTooltip() {
      if (tooltipInstance) tooltipInstance.hide();
    },
  },
  props: {
    msg: String,
  },
  data() {
    return {
      abc: 100,
    };
  },
};
</script>
