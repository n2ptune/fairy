<template>
  <div id="fairy-app">
    <FairyButton
      v-if="testLoadFairy"
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
    testLoadFairy: false,
    isFairy: ''
  }),

  created() {
    const loadFairy = () => {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000)
      })
    }

    loadFairy().then(() => {
      this.testLoadFairy = true
    })
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
