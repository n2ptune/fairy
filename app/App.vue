<template>
  <div id="fairy-app">
    <div class="fairy-inner-container" v-if="fairyData">
      <InnerContainer v-show="fairyActive" />
      <FairyButton v-if="fairyData" @active="onFairy" @close="offFairy" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import FairyButton from '@components/FairyButton.vue'
import InnerContainer from '@components/inner/Container.vue'

export default defineComponent({
  components: {
    FairyButton,
    InnerContainer
  },

  setup(props, { root }) {
    const fairyData = computed(() => root.$store.getters.getFairyData)
    const fairyActive = computed(() => root.$store.getters.getFairyActive)
    const detailActive = computed(() => root.$store.getters['detail/getActive'])

    const onFairy = () => {
      if (detailActive.value) {
        root.$store.commit('detail/SWITCH_ACTIVE')
      }
      root.$store.commit('SET_FAIRY_ACTIVE', true)
    }

    const offFairy = () => {
      if (detailActive.value) {
        root.$store.commit('detail/SWITCH_ACTIVE')
      }
      root.$store.commit('SET_FAIRY_ACTIVE', false)
    }

    return {
      fairyData,
      fairyActive,
      detailActive,
      onFairy,
      offFairy
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';

#fairy-app {
  position: fixed;
  bottom: $fairy-area-distance;
  right: $fairy-area-distance;
}
</style>
