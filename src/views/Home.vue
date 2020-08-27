<template>
  <el-container>
    <el-main>
      <LandingTop />
      <LandingMiddle />
      <el-row type="flex" justify="center" class="aa" :gutter="20">
        <el-col :span="6" class="left">
          <img
            class="phone-image"
            :src="require('@/assets/images/fairy-in-phone.png')"
          />
        </el-col>
        <el-col :span="6" class="right">
          Text
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
  margin: 15rem 0;
}

.left {
  text-align: center;
}
</style>
