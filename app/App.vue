<template>
  <div id="fairy-app">
    <span class="red">
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hello Fairy App !!!!'
  }),

  mounted() {}
}
</script>

<style scoped>
.red {
  color: red;
  font-size: 10rem;
}
</style>
