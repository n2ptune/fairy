<template>
  <div class="content-container">
    <ul v-if="active.contents" class="content-list">
      <li
        v-for="content in fairyData.contents"
        :key="content.title"
        class="content-wrap"
      >
        <ContentBox :isLoading="false" :content="content" />
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

  computed: {
    ...mapGetters({
      active: 'getActive',
      fairyData: 'getFairyData'
    })
  },

  activated() {
    if (!this.active.contents) {
      this.loadContents()
    }
  },

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
