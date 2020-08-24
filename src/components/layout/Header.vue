<template>
  <el-header class="header">
    <el-row type="flex" justify="center" align="middle" :gutter="20">
      <!-- 로고 -->
      <el-col :xs="22" :md="4" :lg="2">
        <h1 class="logo-text">Fairy</h1>
      </el-col>
      <!-- 메뉴 -->
      <el-col :md="10" :lg="6" class="hidden-sm-and-down">
        <el-menu :router="true" mode="horizontal">
          <el-menu-item :route="{ path: '/' }" index="1">
            Home
          </el-menu-item>
          <el-menu-item :route="{ path: '/about' }" index="2">
            About
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- Create Fairy Button -->
      <el-col :span="2" class="hidden-xs-only">3</el-col>
      <!-- 모바일 메뉴 -->
      <el-col class="hidden-sm-and-up" :span="2">Menu</el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data: () => ({
    height: '120px'
  })
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-bottom: none !important;

  &-item {
    height: auto !important;
    font-size: 1.05rem !important;
    border-bottom: none !important;
  }
}

.logo-text {
  // font-weight: bold;
  font-size: 1.3rem;
}
</style>
