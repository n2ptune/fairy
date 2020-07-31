<template>
  <div id="app">
    <el-container direction="horizontal">
      <el-header :style="{ padding: '0', width: '100%' }" height="auto">
        <el-menu
          :default-active="menuActive"
          :style="{ display: 'flex', justifyContent: 'center' }"
          mode="horizontal"
        >
          <el-menu-item :style="{ cursor: 'default' }">
            <h1>Fairy</h1>
          </el-menu-item>
          <el-menu-item
            v-for="item in menuItems"
            :key="item.index"
            :index="item.index"
            @click="moveRoute"
          >
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
    <router-view />
  </div>
</template>

<script>
export default {
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
