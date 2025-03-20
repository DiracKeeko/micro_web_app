import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../view/Home.vue'

Vue.use(VueRouter)

const routes = [];
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '@/view/About.vue')
//   },
//   {
//     path: '/test',
//     name: 'Test',
//     component: () => import(/* webpackChunkName: "about" */ '@/view/TestJsonFormat.vue')
//   },
//   {
//     path: '/*',
//     redirect: '/'
//   }
// ]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
