<template>
  <div class="textbox container">
    <h1>Start Typing!</h1>
    <div class="container">
      <form action="#" class="form-group">
        <div class="form-group">
        <label for="exampleFormControlTextarea1">{{username}}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="11" cols="30" placeholder="type as fast as you can!" :value='enemyTyping' disabled></textarea>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  props: ['username'],

  computed: {
    enemyTyping () {
      return this.$store.state.typing
    }
  }
}
</script>

<style>

</style>