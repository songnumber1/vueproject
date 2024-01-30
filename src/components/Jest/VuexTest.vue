<template>
  <div style="background-color: red">
    <button @click="MutationCall">MutationCall</button>
    <button @click="GetterCall">GetterCall</button>
  </div>
</template>

<script>
export default {
  name: "VuexTest",

  methods: {
    MutationCall() {
      this.$store.commit("user/setLogin", {
        isLogin: true,
      });
    },
    GetterCall() {
      console.log(this.$store.getters["user/getIsLogin"]);
    },
  },
};
</script>
