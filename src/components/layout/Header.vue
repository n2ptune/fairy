<template>
  <el-container direction="horizontal">
    <el-header :height="height" class="header">
      <div>asdfg</div>
      <div>asdfg</div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data: () => ({
    height: '120px'
  })
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
}
</style>
