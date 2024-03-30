<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld message="Welcome to Your Vue.js App"/>
    <UserTab />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserTab from './components/UserTab.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserTab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
