<template>
  <div class="wrapper fadeInDown">
    <h1>Welcome to Keyboard Smasher!</h1>
    <h2>are you ready?</h2>
    <div id="formContent">
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/smashed1.jpg" id="icon" alt="User Icon" />
      </div>
      <!-- Login Form -->
      <form>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Enter Username" v-model="username">
        <input type="submit" class="fadeIn fourth" value="Start Smashing!" @click.prevent="loginBtn()">
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */

export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    loginBtn () {
      console.log(this.username)
      this.$store.dispatch('login', { username: this.username }).then(_ => { this.$router.push('/game') })
    }
  }
}
</script>

<style>

</style>