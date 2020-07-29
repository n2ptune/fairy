<template>
  <div id="fairy-app">
    <FairyButton />
  </div>
</template>

<script>
import FairyButton from './components/FairyButton.vue'

export default {
  components: {
    FairyButton
  },

  data: () => ({
    message: 'Hello Fairy App !!!!'
  })
}
</script>

<style scoped>
#fairy-app {
  position: fixed;
  bottom: 15px;
  right: 15px;
}
</style>
