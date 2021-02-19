/* eslint-disable eol-last */
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import store from '../store/index.js'

const socket = new VueSocketIO({
  debug: true,
  connection: 'https://mighty-reaches-11364.herokuapp.com/',
  vuex: {
    store,
    actionPrefix: 'SOCKET',
    mutationPrefix: 'SOCKET'
  }
})

Vue.use(socket)