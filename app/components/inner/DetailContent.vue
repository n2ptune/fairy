<template>
  <transition name="detail" appear>
    <div class="detail-view">
      <div class="detail-inner no-scroll">
        <unicon name="times" class="close" @click="close" />
        <div class="title">
          {{ content.title }}
        </div>
        <div class="body">
          {{ content.body }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      content: 'detail/getContent'
    })
  },

  methods: {
    ...mapMutations({
      close: 'detail/SWITCH_ACTIVE'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_breakpoints.scss';

.detail-enter-active,
.detail-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.detail-enter,
.detail-leave-to {
  opacity: 0;
  transform: translateY(30%);
}

.detail-enter-to,
.detail-leave {
  opacity: 1;
  transform: translateY(0);
}

.detail-view {
  z-index: 30;
  position: fixed;
  margin-left: $fairy-detail-cp-padding;
  margin-top: $fairy-detail-cp-padding;
  width: calc(#{$fairy-inner-box-width} - #{$fairy-detail-cp-padding * 2});
  height: calc(#{$fairy-inner-box-height} - #{$fairy-detail-cp-padding * 2});

  @include mobile {
    width: calc(
      #{$fairy-inner-box-mobile-width} - #{$fairy-detail-cp-padding * 2}
    );
    height: calc(
      #{$fairy-inner-box-mobile-height} - #{$fairy-detail-cp-padding * 2}
    );
  }

  background: $fairy-detail-cp-bg-color;
  border-radius: $fairy-inner-box-radius;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  & .detail-inner {
    position: relative;
    padding: 2rem 1rem;
    height: $fairy-detail-cp-size;
    overflow-y: scroll;

    & .title,
    & .body {
      word-break: break-all;
    }

    & .title {
      font-size: 1.4rem;
      font-weight: bold;
    }

    & .body {
      margin: 1rem 0 2rem 0;
      overflow-y: auto;
    }

    & .close {
      fill: darkgray;
      position: absolute;
      top: $fairy-detail-cp-close-distance;
      right: $fairy-detail-cp-close-distance;
      cursor: pointer;

      &:hover {
        fill: rgba(0, 0, 0, 0.75);
      }
    }
  }
}
</style>
