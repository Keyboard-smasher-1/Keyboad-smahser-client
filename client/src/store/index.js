import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('username') || false,
    typing: '',
    userServer: 0
  },
  mutations: {
    isLogin (state, payload) {
      state.isLoggedIn = payload
    },
    liveTyping (state, payload) {
      // console.log(payload, 'mutations')
      state.typing = payload
    },
    setUserServer (state) {
      state.userServer++
    },
    decrementUserServer (state) {
      // console.log(state.userServer)
      state.userServer--
      // console.log(state.userServer)
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
    },
    SOCKETenemyText (context, text) {
      // console.log(text, 'ini di actions')
      context.commit('liveTyping', text)
    },
    SOCKETfullUser (context, message) {
      context.commit('setIsFull', true)
    }
  },
  modules: {
  }
})
