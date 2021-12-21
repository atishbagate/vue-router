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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Brazil",
    name: "Brazil",
    component: () =>
      import(/*webpackChunkName: "Brazil"*/ "../views/Brazil.vue"),
  },
  {
    path: "/Panama",
    name: "Panama",
    component: () =>
      import(/*webpackChunkName: "Panama"*/ "../views/Panama.vue"),
  },
  {
    path: "/Jamaica",
    name: "Jamaica",
    component: () =>
      import(/*webpackChunkName: "Jamaica"*/ "../views/Jamaica.vue"),
  },
  {
    path: "/Hawaii",
    name: "Hawaii",
    component: () =>
      import(/*webpackChunkName: "Hawaii"*/ "../views/Hawaii.vue"),
  },
  {
    path: "/details",
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
