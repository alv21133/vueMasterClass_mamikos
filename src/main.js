import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import AppDate from "@/components/AppDate";
import firebase from "firebase";
require("firebase/auth");
Vue.component("AppDate", AppDate);
Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyB9zqJRtF14i1Y-TbqhJZusHEnecYf1pF0",
  authDomain: "vue-school-forum-1cba2.firebaseapp.com",
  databaseURL: "https://vue-school-forum-1cba2.firebaseio.com",
  projectId: "vue-school-forum-1cba2",
  storageBucket: "vue-school-forum-1cba2.appspot.com",
  messagingSenderId: "523673221196",
  appId: "1:523673221196:web:682c3d7922c417a94bdce9",
  measurementId: "G-GT0PK7LSFR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  beforeCreate() {
    store.dispatch("fetchUser", { id: store.state.authId });
  },
  render: (h) => h(App),
}).$mount("#app");
