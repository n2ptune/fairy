<template>
  <div id="app">
    <el-container direction="horizontal">
      <el-header height="auto"> </el-header>
    </el-container>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.el-container {
  align-items: center;
}

.el-header {
  line-height: 60px;
}
</style>
