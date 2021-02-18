import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('username') || false,
    username: localStorage.getItem('username')
  },
  mutations: {
    isLogin (state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login (context, payload) {
      localStorage.setItem('username', payload.username)
      context.commit('isLogin', true)
    },
    logout (context) {
      localStorage.clear()
      context.commit('isLogin', false)
      router.push('/')
    }
  },
  modules: {
  }
})
