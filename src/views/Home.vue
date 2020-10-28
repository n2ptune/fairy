<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <Top />
        <Examples />
        <Features />
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import Top from '@/components/landing/Top.vue'
import Examples from '@/components/landing/Examples.vue'
import Features from '@/components/landing/Features.vue'

export default {
  components: {
    Top,
    Examples,
    Features
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

<style lang="scss" scoped></style>
