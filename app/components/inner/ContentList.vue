<template>
  <keep-alive>
    <ul class="content-list">
      <li class="content-wrap">
        <div class="content">
          {{ contents }}
        </div>
      </li>
    </ul>
  </keep-alive>
</template>

<script>
export default {
  data: () => ({
    contents: null
  }),

  computed: {
    active() {
      return {
        fairy: this.$fairy.isActiveFairy,
        content: this.$fairy.isLoadedContents
      }
    }
  },

  created() {
    if (this.active.fairy) {
      if (!this.active.content) {
        this.$fairy
          .loadContents()
          .then(() => (this.contents = this.$fairy.data.contents))
          .catch(error => console.log(error))
      }
    }
  },

  mounted() {}
}
</script>
