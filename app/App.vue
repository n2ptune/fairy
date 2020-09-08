<template>
  <div id="fairy-app">
    <div class="fairy-inner-container" v-if="fairyData">
      <InnerContainer v-show="fairyActive" />
      <FairyButton v-if="fairyData" @active="onFairy" @close="offFairy" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import FairyButton from '@components/FairyButton.vue'
import InnerContainer from '@components/inner/Container.vue'

export default {
  components: {
    FairyButton,
    InnerContainer
  },

  computed: {
    ...mapGetters({
      fairyData: 'getFairyData',
      fairyActive: 'getFairyActive',
      detailActive: 'detail/getActive'
    })
  },

  created() {
    this.$watch
  },

  methods: {
    ...mapActions({
      loadData: 'loadFairy'
    }),
    ...mapMutations({
      switch: 'SET_FAIRY_ACTIVE',
      detailSwitch: 'detail/SWITCH_ACTIVE'
    }),
    onFairy() {
      if (this.detailActive) this.detailSwitch()

      this.switch(true)
    },
    offFairy() {
      if (this.detailActive) this.detailSwitch()

      this.switch(false)
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
