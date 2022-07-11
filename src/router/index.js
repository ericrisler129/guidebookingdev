import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // This is for the scroll top when click on any router link
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  }
  // This is for the scroll top when click on any router link
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    if (to.matched.some((m) => !m.meta.public)) {
      const token = localStorage.getItem('token')
      if (!token && !to.meta.public) {
        next({ name: 'SignIn' })
      }
    }
  }
  next()
})

export default router
