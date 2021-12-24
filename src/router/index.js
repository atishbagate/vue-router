import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

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
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound404" });
      }
    },
  },
  {
    // this is for vue 2 . in vue 3 the path address changed to    path: "/:pathMatch(.*)*"
    path: "/404",
    alias: "*",
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      // to simulate the scroll behaviors
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#expriance") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes,
});

export default router;
