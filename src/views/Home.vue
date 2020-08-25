<template>
  <el-container>
    <el-main>
      <LandingTop />
      <LandingMiddle />
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
