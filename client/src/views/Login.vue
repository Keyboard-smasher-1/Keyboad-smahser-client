<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <br>
    <h1>Welcome to Keyboard Smasher!</h1>
    <h5>enter your username and start playing</h5>
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/smashed1.jpg" id="icon" alt="User Icon" />
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