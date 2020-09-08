<template>
  <section class="contents">
    <transition name="disappear">
      <keep-alive>
        <ContentList v-if="fairyActive" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import ContentList from '@components/inner/ContentList.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    ContentList
  },

  computed: {
    ...mapGetters({
      fairyActive: 'getFairyActive'
    })
  }
}
</script>

<style lang="scss" scoped>
.disappear-leave-active {
  transition: opacity 0.5s ease-out;
}

.disappear-leave-to {
  opacity: 0;
}

@import '@styles/_variables.scss';

.contents {
  background-color: white;
  padding: 1rem;
  border-top-left-radius: $fairy-inner-contents-box-radius;
  border-top-right-radius: $fairy-inner-contents-box-radius;
  height: auto;
  position: relative;
  top: $fairy-header-to-inner-distance;
}
</style>
