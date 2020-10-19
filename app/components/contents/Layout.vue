<template>
  <section class="contents">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
@import '@app/styles/_variables.scss';

.contents {
  background-color: white;
  padding: 1rem;
  border-top-left-radius: $fairy-inner-contents-box-radius;
  border-top-right-radius: $fairy-inner-contents-box-radius;
  height: auto;
  position: relative;
  top: $fairy-header-to-inner-distance;
}
</style>
