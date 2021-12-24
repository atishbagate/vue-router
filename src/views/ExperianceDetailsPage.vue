<template>
  <section class="sec">
    <h1>{{ expriance.name }}</h1>
    <div class="expriance-details">
      <img
        :src="require(`@/assets/${expriance.image}`)"
        :alt="expriance.name"
      />
      <p>{{ expriance.description }}</p>
    </div>
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    exprianceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
    expriance() {
      return this.destination.experiences.find(
        (expriance) => expriance.slug === this.exprianceSlug
      );
    },
  },
};
</script>
<style scoped>
.sec {
  margin-top: 50px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.expriance-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
