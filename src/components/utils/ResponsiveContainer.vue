<template>
  <el-row type="flex" justify="center" :style="{ margin: '3rem 0' }">
    <el-col :xs="24" :sm="18" :md="12" :lg="8" :xl="6">
      <slot />
    </el-col>
  </el-row>
</template>
