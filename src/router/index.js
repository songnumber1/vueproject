import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CameraView from "../views/CameraView.vue";
import ChatView from "../views/ChatView.vue";
import ChatUnitView from "../views/ChatUnitView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/camera",
    name: "camera",
    component: CameraView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
  },{
    path: "/chatunit",
    name: "chatunit",
    component: ChatUnitView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/vuextest",
    name: "vuextest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vuextest" */ "../components/Jest/VuexTest.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export function routerFunc() {
  // console.log(router, 'routerFunc');
}

export default router;
