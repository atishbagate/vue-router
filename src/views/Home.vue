<template>
  <div class="home">
    <h1>All Destinations for Trip</h1>
    <div class="destinations">
      <div v-for="destinations in destinations" :key="destinations.id">
        <router-link
          :to="{ name: 'DestinationDetails', params: { id: destinations.id } }"
        >
          <h2>{{ destinations.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { id: destinations.id },
            }"
          >
            <img
              :src="require(`@/assets/${destinations.image}`)"
              :alt="destinations.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
