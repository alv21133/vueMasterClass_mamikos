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
    name: "ThreadShow",
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
    path: "/thread/create/:forumId",
    name: "ThreadCreate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageThreadCreate.vue"
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
  {
    path: "/me",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/pages/PageProfile"),
    props: true,
  },
  {
    path: "/me/edit",
    name: "ProfileEdit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/pages/PageProfile"),
    props: { edit: true },
  },
  {
    path: "/thread/:id/edit",
    name: "ThreadEdit",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageThreadEdit"
      ),
    props: true,
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PageRegister"
      ),
    props: true,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/pages/PageSignIn"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
