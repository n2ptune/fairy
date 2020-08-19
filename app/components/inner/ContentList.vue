<template>
  <div class="content-container">
    <ul v-if="active.contents" class="content-list">
      <li
        v-for="content in fairyData.contents"
        :key="content.title"
        class="content-wrap"
      >
        <div class="content">
          {{ fairyData.contents }}
        </div>
      </li>
    </ul>
    <div v-else class="content-loading-container">
      Loading...
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
.content {
  color: black;
}
</style>
