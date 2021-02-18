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
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="Enter Username" v-model="login.username">
        <input type="submit" class="fadeIn fourth" value="Start Smashing!" @click.prevent="loginBtn()">
      </form>

    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  data () {
    
  },
  methods: {
    loginBtn () {
      this.$store.dispatch('login', {username:})
    }
  }
}
</script>

<style>

</style>