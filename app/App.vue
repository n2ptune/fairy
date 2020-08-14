<template>
  <div id="fairy-app">
    <div class="fairy-inner-container" v-if="fairyData">
      <InnerContainer v-show="activeFairy" :active="activeFairy" />
      <FairyButton
        v-if="fairyData"
        :active="activeFairy"
        @active="onFairy"
        @close="offFairy"
      />
    </div>
  </div>
</template>

<script>
import FairyButton from '@components/FairyButton.vue'
import InnerContainer from '@components/inner/Container.vue'

export default {
  components: {
    FairyButton,
    InnerContainer
  },

  data: () => ({
    activeFairy: false,
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
      this.activeFairy = true
      this.$fairy.active()
    },
    offFairy() {
      this.activeFairy = false
      this.$fairy.deactive()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';

#fairy-app {
  position: fixed;
  bottom: $fairy-area-distance;
  right: $fairy-area-distance;
}
</style>
