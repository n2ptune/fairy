<template>
  <transition name="appear-from-bottom" appear>
    <Box />
  </transition>
</template>

<script>
import Box from '@components/inner/Box.vue'

export default {
  components: {
    Box
  }
}
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
</style>
