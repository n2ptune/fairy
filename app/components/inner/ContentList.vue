<template>
  <div class="content-container">
    <ul v-if="active.contents" class="content-list">
      <li v-for="content in contents" :key="content.title" class="content-wrap">
        <ContentBox :isLoading="false" :content="content" :rss="isRSS" />
      </li>
    </ul>
    <div v-else class="content-loading-container">
      <ContentBox v-for="i in 3" :key="i" :isLoading="true" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ContentBox from './ContentBox.vue'

export default {
  components: {
    ContentBox
  },

  data: () => ({
    contents: null
  }),

  created() {
    if (!this.active.contents) {
      this.loadContents()
        .then(() => {
          this.contents = this.isRSS
            ? this.rssData.items
            : this.defaultData.contents
        })
        .catch(error => console.error(error))
    }
  },

  computed: {
    ...mapGetters({
      active: 'getActive',
      isRSS: 'getIsRSS',
      rssData: 'getRSSData',
      defaultData: 'getFairyData'
    })
  },

  // activated() {
  //   if (!this.active.contents) {
  //     this.loadContents()
  //   }
  // },

  methods: {
    ...mapActions({
      loadContents: 'loadContents'
    })
  }
}
</script>

<style lang="scss" scoped>
.content-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
