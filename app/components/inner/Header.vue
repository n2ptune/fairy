<template>
  <header class="inner-header">
    <div>{{ fr.siteName }}</div>
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
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  font-weight: bold;

  padding: 1rem 1rem 3rem 1rem;
}
</style>
