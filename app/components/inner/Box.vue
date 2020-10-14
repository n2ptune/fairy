<template>
  <main
    :style="{ backgroundColor: fairy.themeColor }"
    class="fairy-inner-box no-scroll"
  >
    <InnerHeader />
    <component :is="innerComponents" />
    <DetailContent v-if="detailActive" />
    <footer>Fairy</footer>
  </main>
</template>

<script>
import { computed } from '@vue/composition-api'
import InnerHeader from './Header.vue'
import InnerContents from '../contents/ListContainer.vue'
import CounselForm from '../contents/CounselForm.vue'
import DetailContent from '../contents/detail/Content.vue'

export default {
  components: {
    InnerHeader,
    DetailContent
  },

  setup(props, { root: { $store: store } }) {
    const detailActive = computed(() => store.getters['detail/getActive'])
    const fairy = computed(() => store.getters.getFairyData)
    const innerContentActive = computed(
      () => store.getters.getInnerContentActive
    )
    const innerComponents = computed(() => {
      return innerContentActive.value ? InnerContents : CounselForm
    })

    return {
      detailActive,
      fairy,
      innerContentActive,
      innerComponents
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_breakpoints.scss';

.fairy-inner-box {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

@include mobile {
  .fairy-inner-box {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;

    width: $fairy-inner-box-mobile-width;
    height: $fairy-inner-box-mobile-height;
  }
}

@include not-mobile {
  .fairy-inner-box {
    margin-bottom: $fairy-area-distance;
    border-radius: $fairy-inner-box-radius;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

    width: $fairy-inner-box-width;
    height: $fairy-inner-box-height;
  }
}
</style>
