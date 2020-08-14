<template>
  <section class="contents">
    <ContentList v-once />
  </section>
</template>

<script>
import ContentList from '@components/inner/ContentList.vue'

export default {
  components: {
    ContentList
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
