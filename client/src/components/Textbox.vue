<template>
  <div class="textbox container">
    <h1>Start Typing!</h1>
    <div class="container">
      <form action="#" class="form-group">
        <div class="form-group">
        <label for="exampleFormControlTextarea1">{{username}}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="11" cols="30" placeholder="type as fast as you can!"  v-model="types" @input="sendTyping()" ></textarea>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */

export default {
  props: ['username'],
  data () {
    return {
      text: '',
      types: ''
    }
  },
  sockets: {
    connect () {
      console.log('------connected')
    },
    serverTyping (typing) {
      console.log('------ dari server', typing)
    }
  },
  methods: {
    sendTyping () {
      if (this.types.length !== 10) {
        this.$socket.emit('newTyping', this.types)
      } else if (this.types.length === 10) {
        console.log('winner')
      }
    }
  }
}
</script>

<style>

</style>