<template>
  <Layout>
    <List />
  </Layout>
</template>

<script>
import List from './List.vue'
import Layout from './Layout.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    List,
    Layout
  }
})
</script>
