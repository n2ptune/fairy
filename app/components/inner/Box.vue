<template>
  <main
    class="fairy-inner-box no-scroll"
    :style="{ backgroundColor: fairy.themeColor }"
  >
    <InnerHeader />
    <InnerContents />
    <DetailContent v-if="detailActive" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import InnerHeader from './Header.vue'
import InnerContents from './Contents.vue'
import DetailContent from './DetailContent.vue'

export default {
  components: {
    InnerHeader,
    InnerContents,
    DetailContent
  },

  computed: {
    ...mapGetters({
      fairy: 'getFairyData',
      detailActive: 'detail/getActive'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_breakpoints.scss';

.fairy-inner-box {
  overflow-y: auto;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  display: flex;
  flex-direction: column;
  position: relative;

  // &::-webkit-scrollbar {
  //   display: none;
  // }
}

@include mobile {
  .fairy-inner-box {
    // Only mobile property
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;

    // Common
    width: $fairy-inner-box-mobile-width;
    height: $fairy-inner-box-mobile-height;
  }
}

@include not-mobile {
  .fairy-inner-box {
    // Only not-mobile property
    margin-bottom: $fairy-area-distance;
    border-radius: $fairy-inner-box-radius;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

    // Common
    width: $fairy-inner-box-width;
    height: $fairy-inner-box-height;
  }
}
</style>
