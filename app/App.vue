<template>
  <div id="fairy-app">
    <FairyButton
      v-if="fairyApp"
      :is-fairy="isFairy"
      @on-fairy="onFairy"
      @off-fairy="offFairy"
    />
  </div>
</template>

<script>
import FairyButton from './components/FairyButton.vue'

export default {
  components: {
    FairyButton
  },

  data: () => ({
    isFairy: '',
    fairyApp: null
  }),

  mounted() {
    if (window.FAIRY_APP) {
      // Loaded this
      console.log(window.FAIRY_APP)
    }
  },

  methods: {
    onFairy() {
      this.isFairy = 'ON'
      console.log('on')
    },
    offFairy() {
      this.isFairy = 'OFF'
      console.log('off')
    }
  }
}
</script>

<style lang="scss" scoped>
#fairy-app {
  position: fixed;
  bottom: 15px;
  right: 15px;
}
</style>
