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
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      fairy: 'getFairyData'
    }),
    ...mapState({
      fairyStatus: 'fairy'
    })
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
      if (this.fairyStatus.active.fairy) {
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
