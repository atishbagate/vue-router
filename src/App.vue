<template>
  <div id="app">
    <TheNavigation />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <!-- <Home /> -->
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {
    TheNavigation,
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
/* //this is the class name of slide for transition (custome class -> slide)
there are 6 total classes given by vue to define transition  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
