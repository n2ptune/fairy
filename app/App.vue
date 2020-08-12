<template>
  <div id="fairy-app">
    <div class="fairy-inner-container">
      <FairyInner v-show="activeFairy" :active="activeFairy" />
      <FairyButton
        v-if="fairyData"
        :color="fairyData.themeColor"
        :active="activeFairy"
        @active="onFairy"
        @close="offFairy"
      />
    </div>
  </div>
</template>

<script>
import FairyButton from './components/FairyButton.vue'
import FairyInner from './components/FairyInner.vue'

export default {
  components: {
    FairyButton,
    FairyInner
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
    },
    offFairy() {
      this.activeFairy = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/_variables.scss';

#fairy-app {
  position: fixed;
  bottom: $fairy-area-distance;
  right: $fairy-area-distance;
}
</style>
