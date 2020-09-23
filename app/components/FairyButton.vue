<template>
  <transition name="scale-up" appear>
    <button
      class="fairy-button"
      @click.prevent="switchFairy"
      :style="{ backgroundColor: fairy.themeColor }"
    >
      <transition
        mode="out-in"
        :css="false"
        @before-enter="transitionHooks.beforeEnter"
        @enter="transitionHooks.enter"
        @before-leave="transitionHooks.beforeLeave"
        @leave="transitionHooks.leave"
      >
        <unicon v-if="fairyActive" key="close" name="times" fill="white" />
        <unicon v-else key="active" name="comment-notes" fill="white" />
      </transition>
    </button>
  </transition>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root, emit }) {
    const fairy = computed(() => root.$store.getters.getFairyData)
    const fairyActive = computed(() => root.$store.getters.getFairyActive)

    const transitionHooks = {
      // Enter
      beforeEnter(el) {},
      enter(el, done) {},
      // Leave
      beforeLeave(el) {},
      leave(el, done) {}
    }

    const switchFairy = () => {
      if (fairyActive.value) {
        return emit('close')
      } else {
        return emit('active')
      }
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

  & .unicon::v-deep svg {
    width: $fairy-icon-size;
    height: $fairy-icon-size;
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
