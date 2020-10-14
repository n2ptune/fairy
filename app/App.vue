<template>
  <div id="fairy-app">
    <div class="fairy-inner-container" v-if="fairyData">
      <InnerContainer v-show="fairyActive" />
      <FairyButton v-if="fairyData" />
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
    const { $store: store } = root

    const fairyData = computed(() => store.getters.getFairyData)
    const fairyActive = computed(() => store.getters.getFairyActive)

    return {
      fairyData,
      fairyActive
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
