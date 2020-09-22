<template>
  <transition name="scale-up" appear>
    <button
      class="fairy-button"
      @click.prevent="switchFairy"
      :style="{ backgroundColor: fairy.themeColor }"
    >
      <unicon name="comment-notes" fill="white" />
    </button>
  </transition>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root, emit }) {
    const fairy = computed(() => root.$store.getters.getFairyData)
    const fairyActive = computed(() => root.$store.getters.getFairyActive)

    const switchFairy = () => {
      if (fairyActive.value) {
        return emit('close')
      } else {
        return emit('active')
      }
    }

    return {
      fairy,
      switchFairy
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
