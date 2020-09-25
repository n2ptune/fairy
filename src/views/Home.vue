<template>
  <el-container>
    <el-main class="home-main">
      <LandingTop />
      <LandingBottom :key="1" image="fairy-in-phone.png">
        <template #right-top>
          {{ 'easy input contents' | uppercase }}
        </template>
        <template #right-middle>
          Maecenas lacinia ultricies tempor. Integer.
        </template>
        <template #right-bottom>
          Aliquam a interdum mauris. Maecenas massa enim, malesuada vel
          fringilla gravida, vehicula eu quam. Sed non sollicitudin ligula, et
          finibus mauris. Sed vel mauris quis.
        </template>
      </LandingBottom>
      <LandingBottom :key="2" :reverse="true" image="fairy-in-phone-detail.png">
        <template #right-top>
          {{ 'intuitive interface' | uppercase }}
        </template>
        <template #right-middle>
          Sed elementum et erat id finibus. Nam a risus vitae.
        </template>
        <template #right-bottom>
          Proin erat eros, finibus non varius ullamcorper, cursus at erat. Sed
          iaculis dui dui, sed malesuada tellus facilisis vitae. Suspendisse
          vehicula, turpis nec rutrum ultricies, nunc magna lacinia purus, at.
        </template>
      </LandingBottom>
      <LandingSteps />
    </el-main>
  </el-container>
</template>

<script>
import LandingTop from '@/components/landing/Top.vue'
import LandingBottom from '@/components/landing/Bottom.vue'
import LandingSteps from '@/components/landing/Steps.vue'

export default {
  components: {
    LandingTop,
    LandingBottom,
    LandingSteps
  },

  filters: {
    uppercase(text) {
      if (text) {
        return text.toUpperCase()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-main {
  overflow: hidden;
}
</style>
