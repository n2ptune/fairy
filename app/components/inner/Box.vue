<template>
  <div
    class="fairy-inner-box"
    :style="{ backgroundColor: $fairy.data.themeColor }"
  ></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_breakpoints.scss';

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
