<template>
  <section class="contents">
    <ContentList v-if="fairyActive" />
  </section>
</template>

<script>
import ContentList from './ContentList.vue'
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    ContentList
  },

  setup(props, { root }) {
    const { $store: store } = root
    const fairyActive = computed(() => store.getters.getFairyActive)

    return {
      fairyActive
    }
  }
})
</script>
