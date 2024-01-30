<template>
  <div style="background-color: red">
    <button @click="MutationCall">MutationCall</button>
    <button @click="GetterCall">GetterCall</button>
  </div>
</template>

<script>
import store from "@/store";
// import * as getters from "@/store/modules/user/getters";
import { mapGetters } from "vuex";

export default {
  name: "VuexTest",

  computed: {
    ...mapGetters({ getIsLogin: "user/getIsLogin" }),
  },

  methods: {
    MutationCall() {
      // mock 정상동작한다.
      this.$store.commit("user/setLogin", {
        isLogin: true,
      });

      // mock 정상동작하지 않는다.
      // store.commit("user/setLogin", {
      //   isLogin: true,
      // });
    },

    GetterCall() {
      // mock 정상동작한다.
      console.log(this.$store.getters["user/getIsLogin"]);

      // mock 정상동작하지 않는다.
      console.log(store.getters["user/getIsLogin"]);

      // mock 정상동작한다.
      console.log(this.getIsLogin);

      // // 값이 안나온다
      // console.log(getters.default.getIsLogin);

      // // 값이 안나온다
      // console.log(getters["getIsLogin"]);

      // // 값이 안나온다
      // console.log(getters.getIsLogin);
    },
  },
};
</script>
