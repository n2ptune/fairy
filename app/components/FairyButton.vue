<template>
  <transition name="scale-up" appear>
    <button
      class="fairy-button"
      @click="switchFairy"
      :style="{ backgroundColor: fairy.themeColor }"
    >
      <unicon name="comment-notes" fill="white" />
    </button>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      fairy: 'getFairyData',
      fairyActive: 'getFairyActive'
    })
  },

  methods: {
    switchFairy() {
      if (this.fairyActive) {
        this.$emit('close')
      } else {
        this.$emit('active')
      }
    }
  }
}
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
