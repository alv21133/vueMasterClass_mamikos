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
    meta: { requiresAuth: true },
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
    beforeEnter(to, from, next) {
      if (store.state.authId) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/logout",
    name: "SignOut",
    beforeEnter(to, from, next) {
      store.dispatch("signOut").then(() => next({ name: "Home" }));
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/me/edit",
    name: "ProfileEdit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/pages/PageProfile"),
    props: { edit: true },
    meta: { requiresAuth: true },
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
        /* webpackChunkName: "about" */"../components/pages/PageRegister"
      ),
    meta: { requiresGuest: true },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/pages/PageSignIn"),

    meta: { requiresGuest: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(`🚦 navigating to ${to.name} from ${from.name}`);
  store.dispatch("auth/initAuthentication").then((user) => {
    if (to.matched.some((route) => route.meta.requiresAuth)) {
      // protected route
      if (user) {
        next();
      } else {
        next({ name: "SignIn", query: { redirectTo: to.path } });
      }
    } else if (to.matched.some((route) => route.meta.requiresGuest)) {
      // protected route
      if (!user) {
        next();
      } else {
        next({ name: "Home" });
      }
    } else {
      next();
    }
  });
});
export default router;
