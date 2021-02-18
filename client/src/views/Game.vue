<template>
  <div class="align-container">
    <div class="userTextBox">
      <textbox></textbox>
    </div>
    <div class="opponent">
        <div class="opponentsheading">
        <h3>Opponents Progress</h3>
      </div>
      <div class="opponentsbox">
        <textbox></textbox>
        <textbox></textbox>
        <textbox></textbox>
      </div>
    </div>
  </div>
</template>

<script>
import Textbox from '../components/Textbox.vue'
/* eslint-disable eol-last */
export default {
  components: { Textbox }
}
</script>

<style>

</style>