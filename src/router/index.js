import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // :id declares the dynamic content from the path
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /*webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new VueRouter({
  // this i s the class is applied to active link >
  // define the class in your css code
  linkActiveClass: "vue-school-active-class",
  routes,
});

export default router;
