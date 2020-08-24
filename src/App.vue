<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'

export default {
  components: {
    Header
  },

  data: () => ({
    menuActive: '1',
    menuItems: [
      {
        index: '1',
        name: 'Home'
      },
      {
        index: '2',
        name: 'Create'
      }
    ]
  }),

  created() {
    switch (this.$route.path) {
      case '/':
        return (this.menuActive = '1')
      case '/create':
        return (this.menuActive = '2')
    }
  },

  methods: {
    moveRoute(el) {
      switch (el.index) {
        case '1':
          return this.$route.path === '/'
            ? null
            : this.$router.push({ path: '/' })
        case '2':
          return this.$route.path === '/create'
            ? null
            : this.$router.push({ path: 'create' })
      }
    }
  }
}
</script>

<style scoped>
.el-container {
  align-items: center;
}

.el-header {
  line-height: 60px;
}
</style>
