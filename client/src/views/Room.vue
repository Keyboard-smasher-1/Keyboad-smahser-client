<template>
  <div class="d-flex justify-content-around cardInRoom">
    <div v-for="roomName in roomNames" :key="roomName.id" >
      <card :roomName="roomName">
      </card>
    </div>
  </div>
</template>

<script>
import card from '../components/card.vue'
/* eslint-disable eol-last */
export default {
  components: { card },
  data () {
    return {
      roomNames: ['Centurion', 'Manticore', 'Waffentrager']
    }
  }
}
</script>

<style>

</style>