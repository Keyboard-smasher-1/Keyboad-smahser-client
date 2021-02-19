<template>
  <div class="textbox container">
    <h1>Start Typing!</h1>
    <div class="container">
      <form action="#" class="form-group">
        <div class="form-group">
        <label for="Textarea1">{{user}}</label>
        <textarea class="form-control" id="Textarea1" rows="11" cols="30" placeholder="type as fast as you can!, enter 100 characters to win the game"  v-model="types" @input="sendTyping()" ></textarea>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
import Swal from 'sweetalert2'
export default {
  props: ['username'],
  data () {
    return {
      text: '',
      types: '',
      user: localStorage.username
    }
  },
  sockets: {
    connect () {
      console.log('------connected')
    },
    serverTyping (typing) {
      console.log('------ dari server', typing)
    },
    serverUserWinner (data) {
      let timerInterval
      Swal.fire({
        title: 'The Winner Is ' + data + '!',
        html: 'game will restart in <b></b> milliseconds.',
        timer: 10000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        this.types = ''
        this.$store.commit('liveTyping', '')
      })
    },
    enemyText (data) {
      this.$store.commit('liveTyping', data)
    }
  },
  methods: {
    sendTyping () {
      if (this.types.length !== 100) {
        this.$socket.emit('newTyping', this.types)
        this.$socket.emit('shareTyping', this.types)
      } else if (this.types.length === 100) {
        this.$socket.emit('UserWinner', this.user)
      }
    }
  }
}
</script>

<style>

</style>