import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// ##坑1 子应用所有的path 都必须有值 "/home", "/about" (不要使用 "/" 否则有坑) 
const routes = [
  {
    path: "/home",
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
  // ##坑2 ↓ 子应用不可以出现下面这一行 未匹配重定向 配置
  /* 
    否则在主应用里面，一旦进入子应用页面，路由会被锁死在 子应用的/home
    (锁死在 http://localhost:7788/main/micro-vue2/home )
   */
  // { path: "*", redirect: "/home" },
];

const baseUrl = window.__POWERED_BY_QIANKUN__ ? "/main/microVue2" : "microVue2";
const router = new VueRouter({
  mode: "history",
  base: baseUrl, // 访问/vue的时候加载
  // ## 子应用的base 必须和主应用的 activeRule 一致
  routes,
});

export default router;
