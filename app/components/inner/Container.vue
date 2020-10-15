<template>
  <transition name="appear-from-bottom" appear>
    <main
      :style="{ backgroundColor: fairy.themeColor }"
      class="fairy-inner-box no-scroll"
    >
      <Header />
      <component :is="innerComponents" />
      <DetailContent v-if="detailActive" />
      <Footer />
    </main>
  </transition>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import InnerContents from '../contents/ListContainer.vue'
import CounselForm from '../contents/CounselForm.vue'
import DetailContent from '../contents/detail/Content.vue'
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  components: {
    Header,
    Footer,
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
})
</script>

<style lang="scss" scoped>
@import '@styles/_breakpoints.scss';

$translate-distance: 10%;

.appear-from-bottom-enter-active,
.appear-from-bottom-leave-active {
  transition: opacity 0.35s ease, transform 0.5s ease;
}

.appear-from-bottom-enter,
.appear-from-bottom-leave-to {
  opacity: 0;

  @include not-mobile {
    transform: translateY($translate-distance);
  }
}

.appear-from-bottom-enter-to,
.appear-from-bottom-leave {
  opacity: 1;

  @include not-mobile {
    transform: translateY(0);
  }
}

@import '@styles/_variables.scss';

.fairy-inner-box {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  @include mobile {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;

    width: $fairy-inner-box-mobile-width;
    height: $fairy-inner-box-mobile-height;
  }

  @include not-mobile {
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
