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
  position: absolute;
  top: $fairy-detail-cp-distance;
  left: $fairy-detail-cp-distance;
  width: $fairy-detail-cp-size;
  height: $fairy-detail-cp-size;
  background: $fairy-detail-cp-bg-color;
  border-radius: $fairy-inner-box-radius;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  & .detail-inner {
    position: relative;
    padding: 2rem 1rem;
    height: $fairy-detail-cp-size;
    overflow-y: scroll;

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
