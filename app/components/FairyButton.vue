<template>
  <transition name="scale-up" appear>
    <button
      class="fairy-button"
      @click.prevent="switchFairy"
      :style="{
        backgroundColor: fairy.themeColor,
        '--active-color': fairy.themeColor
      }"
    >
      <transition
        :css="false"
        mode="out-in"
        @before-enter="transitionHooks.beforeEnter"
        @enter="transitionHooks.enter"
        @leave="transitionHooks.leave"
      >
        <unicon v-if="fairyActive" key="close" name="times" fill="white" />
        <unicon
          v-else
          key="active"
          name="comment-dots"
          fill="white"
          icon-style="monochrome"
          class="no-active"
        />
      </transition>
    </button>
  </transition>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import Velocity from 'velocity-animate'

export default defineComponent({
  setup(props, { root }) {
    const { $store: store } = root

    const fairy = computed(() => store.getters.getFairyData)
    const fairyActive = computed(() => store.getters.getFairyActive)
    const detailActive = computed(() => store.getters['detail/getActive'])

    const transitionHooks = {
      beforeEnter(el) {
        el.childNodes[0].style.opacity = 0
      },
      enter(el, done) {
        Velocity(
          el.childNodes[0],
          {
            opacity: 1,
            transform: ['scale(1)', 'scale(0.85)']
          },
          {
            delay: 0,
            duration: 200,
            complete: done
          }
        )
      },
      leave(el, done) {
        Velocity(
          el.childNodes[0],
          {
            opacity: 0,
            transform: ['scale(0.85)', 'scale(1)']
          },
          {
            delay: 0,
            duration: 200,
            complete: done
          }
        )
      }
    }

    const switchFairy = () => {
      if (detailActive.value) {
        store.commit('detail/SWITCH_ACTIVE')
      }
      store.commit('SET_FAIRY_ACTIVE', !fairyActive.value)
    }

    return {
      fairy,
      fairyActive,
      switchFairy,
      transitionHooks
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';
@import '@styles/_mixins.scss';

.fairy-button {
  width: $fairy-area-size;
  height: $fairy-area-size;
  border-radius: $fairy-area-border;
  border: none;
  cursor: pointer;
  display: block;
  float: right;
  @include shadow;

  &:focus {
    outline: none;
  }

  & .unicon {
    &::v-deep svg {
      width: $fairy-icon-size;
      height: $fairy-icon-size;
    }
    &.no-active::v-deep svg circle {
      fill: var(--active-color);
    }
  }
}

.scale-up-enter-active {
  transition: transform 0.4s ease-out;
}
.scale-up-enter {
  transform: scale(0);
}
.scale-up-enter-to {
  transform: scale(1);
}
</style>
