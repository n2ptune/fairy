<template>
  <transition name="detail" appear>
    <div class="detail-view">
      <div class="detail-inner custom-scroll">
        <unicon name="times" class="close" @click="close" />
        <div class="title">
          {{ content.title }}
        </div>
        <div v-dompurify-html="content.body" class="body" />
      </div>
    </div>
  </transition>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  setup(props, { root }) {
    const content = computed(() => root.$store.getters['detail/getContent'])
    const close = () => root.$store.commit('detail/SWITCH_ACTIVE')

    return {
      content,
      close
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
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
      overflow-x: hidden;
      overflow-y: auto;
      overflow-wrap: break-word;

      &::v-deep {
        & img {
          object-fit: cover;
          width: 100%;
        }

        & pre {
          font-size: 14px;
          font-family: 'Roboto Mono', monospace;

          & code {
            font-family: 'Roboto Mono', monospace;
          }
        }
      }
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
