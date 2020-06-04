<template>
  <div id="app">
    <TheNavbar />
    <div class="container">
      <router-view v-show="showPage" @ready="pageReady" />
      <spiner v-show="!showPage || showPage == false"></spiner>
    </div>
  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
import spiner from "@/components/AppSpinner";
import NProgress from "nprogress";
export default {
  components: {
    TheNavbar,
    spiner,
  },
  data() {
    return {
      showPage: false,
    };
  },
  methods: {
    pageReady() {
      this.showPage = true;
      NProgress.done();
    },
  },

  created() {
    NProgress.configure({
      speed: 200,
      showSpinner: false,
    });
    NProgress.start();
    this.$router.beforeEach((to, from, next) => {
      this.showPage = false;
      NProgress.start();
      next();
    });
  },
};
</script>
<style>
 @import "assets/css/style.css";
 @import "~nprogress/nprogress.css";

 #nprogress .bar {
   background: #57AD8D;}
 </style>

