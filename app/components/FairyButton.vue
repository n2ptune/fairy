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
    isFairy: {
      type: String,
      requried: true
    },
    color: {
      type: String,
      required: true
    }
  },

  computed: {
    onFairy() {
      return !(!this.isFairy || this.isFairy === 'OFF')
    }
  },

  methods: {
    switchFairy() {
      if (this.onFairy) {
        this.$emit('off-fairy')
      } else {
        this.$emit('on-fairy')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.fairy-button {
  width: $fairy-area-size;
  height: $fairy-area-size;
  border-radius: $fairy-area-border;
  border: none;
  cursor: pointer;
  display: block;
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
