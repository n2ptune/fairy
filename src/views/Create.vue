<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <div class="step">
          <el-steps :active="stepActive" finish-status="success">
            <el-step title="Step 1" />
            <el-step title="Step 2" />
            <el-step title="Step 3" />
          </el-steps>
          <el-button :style="{ marginTop: '12px' }" @click="nextStep">
            Next Steps
          </el-button>
        </div>
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import ResponsiveContainer from '@/components/utils/ResponsiveContainer.vue'

export default {
  components: {
    ResponsiveContainer
  }
}
</script>
