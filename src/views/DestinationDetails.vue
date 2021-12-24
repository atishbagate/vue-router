<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="expriances">
      <h2>you can visite in {{ destination.name }}</h2>
      <div class="cards" style="display: flex">
        <div
          v-for="expriance in destination.experiences"
          class="card"
          :key="expriance.slug"
        >
          <router-link
            :to="{
              name: 'exprianceDetails',
              params: { exprianceSlug: expriance.slug },
            }"
          >
            <img
              :src="require(`@/assets/${expriance.image}`)"
              :alt="expriance.name"
            />
            <span class="card__text">
              {{ expriance.name }}
            </span>
          </router-link>
        </div>
      </div>
      <!-- to show the view of router  -->
      <router-view :key="$route.path" />
    </section>
  </div>
</template>
<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  // we can use computer property to show which destination to show.
  // computed property uses some custome logic.
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>
<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: relative;
  top: -25%;
  left: 0%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
