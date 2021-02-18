import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
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
    }
  },
  modules: {
  }
})
