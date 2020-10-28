<template>
  <div class="features">
    <div class="title">
      <span>Features</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/_variables.scss';

.features {
  margin: 3rem 0;

  & .title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: $color-dark-header-default;

    & span {
      position: relative;

      &::before {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background-color: green;
        opacity: 0.15;
        z-index: -1;
      }
    }
  }
}
</style>
