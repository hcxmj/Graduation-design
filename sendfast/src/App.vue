<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import login from "./components/login.vue";
// import register from './components/register.vue'

export default {
  name: "app",
  components: {
    // login
    // register
  },
  mounted() {
    this.$router.push("/home");
  }
};
</script>

<style>
a{
  text-decoration: none;
}
body{
  margin: 0
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
