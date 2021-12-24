import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    // what if our url has name of page insted of id. -> :slug
    path: "/Destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /*webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":exprianceSlug",
        name: "exprianceDetails",
        props: true,
        component: () =>
          import(
            /*webpackChunkName: "exprianceDetails"*/ "../views/ExperianceDetailsPage.vue"
          ),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound404",
    component: () =>
      import(/*webpackChunkName : "NotFound404"*/ "../views/NotFound404.vue"),
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
