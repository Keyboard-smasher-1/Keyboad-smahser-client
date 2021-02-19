<template>
  <div class="align-container">
    <div class="userTextBox">
      <textbox :username="username"></textbox>
    </div>
    <div class="opponent">
        <div class="opponentsheading">
        <h3>Player on room</h3>
      </div>
      <div class="opponentsbox">
        <textbox-opponent v-for="username in filter" :key="username.id" :username="username"/>
      </div>
    </div>
  </div>
</template>

<script>
import Textbox from '../components/Textbox.vue'
import TextboxOpponent from '../components/TextboxOpponent.vue'
/* eslint-disable eol-last */
export default {
  data () {
    return {
      usernames: []
    }
  },
  components: {
    Textbox,
    TextboxOpponent
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    filter () {
      console.log(this.usernames)
      const usernameFilter = this.usernames.filter(element => {
        return element !== localStorage.username
      })
      console.log(usernameFilter)
      return usernameFilter
    }
  },
  sockets: {
    userOnline (username) {
      this.usernames = username
    },
    afterLogout (users) {
      this.usernames = users
    }
  }
}
</script>

<style>

</style>