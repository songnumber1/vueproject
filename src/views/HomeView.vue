<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="btnClick">1234</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { routerFunc } from '../router/index'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    btnClick() {
      routerFunc();
    }
  }
}
</script>
