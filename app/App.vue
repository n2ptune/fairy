<template>
  <div id="fairy-app">
    {{ fairyData }}
    <div class="fairy-inner-container">
      <FairyButton
        v-if="true"
        :is-fairy="isFairy"
        @on-fairy="onFairy"
        @off-fairy="offFairy"
      />
    </div>
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
    fairyApp: null,
    fairyData: null
  }),

  created() {
    this.$fairy
      .loadData()
      .then(data => (this.fairyData = data))
      .catch(error => console.error(error))
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
