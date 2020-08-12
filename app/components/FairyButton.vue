<template>
  <transition name="scale-up" appear>
    <button
      class="fairy-button"
      @click="switchFairy"
      :style="{ backgroundColor: color }"
    >
      <unicon name="comment-notes" fill="white" />
    </button>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      requried: true
    },
    color: {
      type: String,
      required: true
    }
  },

  methods: {
    switchFairy() {
      /**
       * Emit event to switch active variable to parent
       * @event close
       * Emit close event to parent if active fairy
       * @event active
       * Emit active event to parent if closed fairy
       */
      if (this.active) {
        this.$emit('close')
      } else {
        this.$emit('active')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.fairy-button {
  width: $fairy-area-size;
  height: $fairy-area-size;
  border-radius: $fairy-area-border;
  border: none;
  cursor: pointer;
  display: block;
  float: right;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.29);

  &:focus {
    outline: none;
  }

  & .unicon::v-deep svg {
    width: $fairy-icon-size;
    height: $fairy-icon-size;
  }
}

.scale-up-enter-active {
  transition: transform 0.55s ease-out;
}
.scale-up-enter {
  transform: scale(0.3);
}
.scale-up-enter-to {
  transform: scale(1);
}
</style>
