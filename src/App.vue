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

<style scoped>
.el-container {
  align-items: center;
}

.el-header {
  line-height: 60px;
}
</style>
