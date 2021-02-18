import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login (context, payload) {
      localStorage.setItem('username', payload)
    }
  }
})
