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
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    contents: null
  }),

  computed: {
    ...mapGetters({
      active: 'getFairyActive'
    })
  },

  created() {
    if (this.active && this.active.fairy) {
      if (!this.active.content) {
        this.loadContents()
      }
    }
  },

  mounted() {},

  methods: {
    ...mapActions({
      loadContents: 'loadContents'
    })
  }
}
</script>
