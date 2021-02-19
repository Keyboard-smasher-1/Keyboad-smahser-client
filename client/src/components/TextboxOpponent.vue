<template>
  <div class="textbox container">
    <h1>{{username}}</h1>
    <!-- <div class="container">
      <form action="#" class="form-group">
        <div class="form-group">
        <label for="Textarea2"></label>
        <textarea class="form-control" id="Textarea2" rows="11" cols="10" placeholder="opponent is typing!" disabled></textarea>
      </div>
      </form>
    </div> -->
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