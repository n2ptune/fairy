<template>
  <header class="inner-header">
    <div class="site-name">{{ fr.siteName }}</div>
  </header>
</template>

<script>
export default {
  computed: {
    fr() {
      return this.$fairy.data
    }
  }
}
</script>

<style lang="scss" scoped>
.inner-header {
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font-weight: bold;

  padding: 1rem 1rem 5rem 1rem;

  & .site-name {
    font-size: 0.9rem;
  }
}
</style>
