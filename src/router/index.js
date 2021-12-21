import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Brazil from "../views/Brazil.vue";
import Panama from "../views/Panama.vue";
import Jamaica from "../views/Jamaica.vue";
import Hawaii from "../views/Hawaii.vue";

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
    component: Brazil,
  },
  {
    path: "/Panama",
    name: "Panama",
    component: Panama,
  },
  {
    path: "/Jamaica",
    name: "Jamaica",
    component: Jamaica,
  },
  {
    path: "/Hawaii",
    name: "Hawaii",
    component: Hawaii,
  },
];

const router = new VueRouter({
  routes,
});

export default router;