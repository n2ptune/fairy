<template>
  <transition name="scale-up" appear>
    <button class="fairy-button" @click="switchFairy">
      {{ onFairy ? 'ON' : 'OFF' }}
    </button>
  </transition>
</template>

<script>
export default {
  props: {
    isFairy: {
      type: String,
      requried: true
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
.fairy-button {
  width: 2rem;
  height: 2rem;
  background-color: red;
  border-radius: 9999px;
  padding: 1rem;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.scale-up-enter-active {
  transition: transform 0.25s ease;
}
.scale-up-enter {
  transform: scale(0.3);
}
.scale-up-enter-to {
  transform: scale(1);
}
</style>
