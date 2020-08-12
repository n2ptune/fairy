<template>
  <transition name="appear-from-bottom">
    <div class="fairy-inner-box"></div>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// Transition
// Entry point (enter, leave)
$translate-distance: 20%;

.appear-from-bottom-enter-active,
.appear-from-bottom-leave-active {
  transition: opacity 0.35s ease, transform 0.5s ease;
}

.appear-from-bottom-enter,
.appear-from-bottom-leave-to {
  opacity: 0;
  transform: translateY($translate-distance);
}

.appear-from-bottom-enter-to,
.appear-from-bottom-leave {
  opacity: 1;
  transform: translateY(0);
}

@import '../styles/_variables.scss';
@import '../styles/_breakpoints.scss';

.fairy-inner-box {
  background: darkslateblue;
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
    border-radius: 0;
  }
}

@include not-mobile {
  .fairy-inner-box {
    // Only not-mobile property
    margin-bottom: $fairy-area-distance;
    border-radius: $fairy-inner-box-radius;

    // Common
    width: $fairy-inner-box-width;
    height: $fairy-inner-box-height;
  }
}
</style>
