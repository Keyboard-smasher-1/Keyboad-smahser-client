<template>
  <b-card
    :title="roomName"
    img-src="https://i.imgflip.com/1z4f8i.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <!-- <b-card-text>
      {{roomName}}
    </b-card-text> -->
    <b-button href="#" variant="primary">Go To Room</b-button>
  </b-card>
</template>

<script>
/* eslint-disable eol-last */

export default {
  props: ['roomName']
}
</script>

<style>

</style>