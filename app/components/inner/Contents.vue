<template>
  <section class="contents">
    <keep-alive>
      <ContentList v-if="fairyActive" />
    </keep-alive>
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
.contents {
  $inner-contents-bor-rad: 15px;

  background-color: white;
  padding: 1rem;
  border-top-left-radius: $inner-contents-bor-rad;
  border-top-right-radius: $inner-contents-bor-rad;
  height: 100%;
}
</style>
