<template>
  <el-container>
    <el-footer>
      <el-row type="flex" justify="center" :gutter="20">
        <el-col :span="6">
          Title and Subscription
        </el-col>
        <el-col :span="6">
          Some Menus
        </el-col>
        <el-col :span="6">
          Some Menus 2
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.el-footer {
  width: 100%;

  & .el-row {
    flex-wrap: wrap;
  }
}
</style>
