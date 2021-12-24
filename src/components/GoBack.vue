<template>
  <span class="go-back">
    <button @click="goBack">Go Back</button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      // thi s syntax will tell you how many steps to go back to visited page.
      // reference will get from history stack in router.
      return this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  border: 0;
}
</style>
