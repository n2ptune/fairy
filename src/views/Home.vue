<template>
  <el-container>
    <el-main>
      <LandingTop />
      <LandingMiddle />
      <el-row type="flex" justify="center" class="aa">
        <el-col :span="12">
          Hmmmm,....
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import LandingTop from '@/components/landing/Top.vue'
import LandingMiddle from '@/components/landing/Middle.vue'

export default {
  components: {
    LandingTop,
    LandingMiddle
  }
}
</script>

<style lang="scss" scoped>
.aa {
  margin: 3rem 0;
}
</style>
