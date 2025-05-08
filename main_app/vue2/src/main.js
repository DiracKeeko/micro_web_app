import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugin/element.js";

import "./config/routeConfig";
// import "./config/microAppConfig"; // 引入qiankun

import "./scss/normalize.css";
import "./scss/theme.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#foundation-app");
