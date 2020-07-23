<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <div class="step">
          <el-steps :active="stepActive" finish-status="success" align-center>
            <el-step
              title="내용 입력"
              description="Fairy가 표시할 내용 혹은 컨텐츠 입력"
            ></el-step>
            <el-step
              title="내용 확인"
              description="입력한 내용 혹은 컨텐츠 한번 더 확인하고 미리보기"
            ></el-step>
          </el-steps>
        </div>
        <div class="step-contents">
          <component :is="componentByStep" />
        </div>
        <div class="step-footer text-center">
          <el-button @click="nextStep">
            Next Steps
          </el-button>
        </div>
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import ResponsiveContainer from '@/components/utils/ResponsiveContainer.vue'
import Create from '@/components/form/Create.vue'
import Preview from '@/components/form/Preview.vue'

export default {
  components: {
    ResponsiveContainer
  },

  data: () => ({
    stepActive: 0
  }),

  computed: {
    componentByStep() {
      return this.stepActive ? Preview : Create
    }
  },

  methods: {
    nextStep() {}
  }
}
</script>

<style scoped>
.step-contents {
  margin: 3rem 0;
}
.step-footer {
  margin: 3rem 0;
}
</style>
