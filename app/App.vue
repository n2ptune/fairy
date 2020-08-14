<template>
  <div id="fairy-app">
    <div class="fairy-inner-container" v-if="fairyData">
      <InnerContainer v-show="activeFairy" />
      <FairyButton v-if="fairyData" @active="onFairy" @close="offFairy" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FairyButton from '@components/FairyButton.vue'
import InnerContainer from '@components/inner/Container.vue'

export default {
  components: {
    FairyButton,
    InnerContainer
  },

  data: () => ({
    activeFairy: false
  }),

  computed: {
    ...mapGetters({
      fairyData: 'getFairyData'
    })
  },

  methods: {
    ...mapActions({
      loadData: 'loadFairy'
    }),
    onFairy() {
      this.$store.commit('SET_FAIRY_ACTIVE', { fairy: true })
      this.activeFairy = true
    },
    offFairy() {
      this.$store.commit('SET_FAIRY_ACTIVE', { fairy: false })
      this.activeFairy = false
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
