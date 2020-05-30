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
    path: "/thread/:id",
    name: "Threadshow ",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageThreadShow.vue"
      ),
    props: true,
  },
  {
    path: "*",
    name: "NotFound ",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageNotFound.vue"
      ),
    props: true,
  },
  {
    path: "/forum/:id",
    name: "forum",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageForum.vue"
      ),
    props: true,
  },
  {
    path: "/category/:id",
    name: "category",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageCategory.vue"
      ),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
