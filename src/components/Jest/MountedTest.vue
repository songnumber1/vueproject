<template>
  <div style="background-color: red">
    <p id="first" ref="firstRef">1234</p>
    <p class="second" ref="secondRef">4321</p>
  </div>
</template>
<script>
export default {
  name: "MountedTest",

  mounted() {
    this.axiosCall();
  },

  methods: {
    axiosCall() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          /* istanbul ignore next */
          console.log(res);
        });
    },

    /* istanbul ignore next */
    funTest() {
      this.$refs.firstRef.innerText = "1234";
      this.$refs.secondRef.innerText = "4321";
    },
  },
};
</script>
