<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Brazil">brazil</router-link>
      <router-link to="/Panama">Panama</router-link>
      <router-link to="/Jamaica">Jamaica</router-link>
      <router-link to="/Hawaii">Hawaii</router-link>
    </div>
    <router-view />
    <!-- <Home /> -->
  </div>
</template>
<script>
// import Home from "../src/views/Home.vue";
export default {
  components: {
    // Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
