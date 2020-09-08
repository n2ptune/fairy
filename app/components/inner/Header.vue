<template>
  <header :style="{ backgroundColor: fairy.themeColor }" class="inner-header">
    <!-- <div class="site-name">{{ fairy.siteName }}</div> -->
    <div class="fixed-menu" :style="{ backgroundColor: fairy.themeColor }">
      <div class="fixed-item">{{ fairy.siteName }}</div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      fairy: 'getFairyData'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_breakpoints.scss';

.inner-header {
  top: 0;
  z-index: 25;
  position: sticky;
  width: $fairy-inner-box-width;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-weight: bold;
  padding: 1rem 0;
  border-top-left-radius: $fairy-inner-box-radius;
  border-top-right-radius: $fairy-inner-box-radius;

  @include mobile {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  & .fixed-menu {
    &__item {
      font-size: 1rem;
      color: white;
    }
  }
}
</style>
