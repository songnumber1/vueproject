import Vue from "vue";
import App from "./App.vue";
import ChatApp from "./ChatApp.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(ChatApp),
}).$mount("#app");
