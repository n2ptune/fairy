<template>
  <Layout>
    <List v-if="fairyActive" />
  </Layout>
</template>

<script>
import List from './List.vue'
import Layout from './Layout.vue'
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    List,
    Layout
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
