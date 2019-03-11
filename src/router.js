import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component : require("@/pages/Home.vue").default
    },
    {
      path: "/about",
      name: "about",
      component : require("@/pages/About.vue").default
    }
  ]
})