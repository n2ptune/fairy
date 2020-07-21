<template>
  <div id="app">
    <el-container direction="horizontal">
      <el-header>
        <h1>Header</h1>
      </el-header>
    </el-container>
    <router-view />
  </div>
</template>

<script>
import { db } from '@/plugins/db'

export default {
  created() {
    console.log(db.collection('d'))
  }
}
</script>

<style scoped>
@import '~@/assets/css/global.css';

.el-container {
  align-items: center;
}

.el-header {
  line-height: 60px;
}
</style>
