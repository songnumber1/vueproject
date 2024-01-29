<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
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
  },
};
</script>
