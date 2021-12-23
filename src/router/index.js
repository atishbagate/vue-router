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
    // what if our url has name of page insted of id. -> :slug
    path: "/details/:slug",
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
  //  mode:"history", will remove the # from url
  mode: "history",
  routes,
});

export default router;
