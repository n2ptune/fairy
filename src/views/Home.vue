<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <Top />
        <Examples />
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import Top from '@/components/landing/Top.vue'
import Examples from '@/components/landing/Examples.vue'

export default {
  components: {
    Top,
    Examples
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
