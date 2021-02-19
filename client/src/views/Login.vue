<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <br>
    <h1>Welcome to Keyboard Smasher!</h1>
    <h5>enter your username and start playing</h5>
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/smash.gif" id="icon" alt="User Icon" />
      </div>
      <!-- Username Form -->
      <form>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Enter Username" v-model="username">
        <input type="submit" class="fadeIn fourth" value="Start Smashing!" @click.prevent="loginBtn()">
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */

import Swal from 'sweetalert2'
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    loginBtn () {
      if (this.userServer < 2) {
        this.$socket.emit('newUser', this.username)
        this.$store.dispatch('login', { username: this.username }).then(_ => { this.$router.push('/game') })
      } else {
        Swal.fire({
          title: 'User Full',
          text: 'The room is full',
          icon: 'error'
        })
      }
    }
  },

  computed: {
    isFull () {
      return this.$store.state.IsFull
    },
    userServer () {
      return this.$store.state.userServer
    }
  },
  sockets: {
    userOnline (data) {
      this.$store.commit('setUserServer')
    }
  }

  // sockets: {
  //   fullUser (message) {
  //     Swal.fire({
  //       title: 'User Full',
  //       message: message,
  //       icon: 'error'
  //     })
  //   }
  // }
}
</script>

<style>

</style>