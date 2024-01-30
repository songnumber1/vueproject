<template>
  <div style="background-color: red">
    <button @click="MutationCall">MutationCall</button>
    <button @click="GetterCall">GetterCall</button>
  </div>
</template>

<script>
import store from "@/store";
import * as getters from "@/store/modules/user/getters";
import { mapGetters } from "vuex";

export default {
  name: "VuexTest",

  computed: {
    ...mapGetters({ getIsLogin: "user/getIsLogin" }),
  },

  methods: {
    MutationCall() {
      store.commit("user/setLogin", {
        isLogin: true,
      });
    },

    GetterCall() {
      console.log(store.getters["user/getIsLogin"]);
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
