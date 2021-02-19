import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Game from '../views/Game.vue'
// import Room from '../views/Room.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
  // {
  //   path: '/room',
  //   name: 'Room',
  //   component: Room
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username')
  if (username && to.name === 'Login') {
    next('/game')
  } else if (!username && to.name === 'Game') {
    next('/')
  // } else if (!username && to.name === 'Room') {
  //   next('/')
  } else {
    next()
  }
})

export default router
