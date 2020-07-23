<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <div class="step">
          <el-steps :active="stepActive" finish-status="success" align-center>
            <el-step
              title="정보 입력"
              description="Fairy를 삽입시킬 사이트의 정보를 입력"
            />
            <el-step title="테마 지정" description="Fairy의 테마를 지정" />
            <el-step
              title="컨텐츠 지정"
              description="Fairy가 노출 시킬 컨텐츠를 지정"
            />
          </el-steps>
        </div>
        <div
          class="step-content"
          :style="{ margin: '3rem 0', padding: '1rem' }"
        >
          <component :is="bindStepComp" @step="formStep" />
        </div>
        <div class="step-footer">
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
import FirstStep from '@/components/form/FirstStep.vue'
import SecondStep from '@/components/form/SecondStep.vue'
import ThirdStep from '@/components/form/ThirdStep.vue'

export default {
  components: {
    ResponsiveContainer,
    FirstStep
  },

  data: () => ({
    stepActive: 0
  }),

  computed: {
    bindStepComp() {
      switch (this.stepActive) {
        case 0:
          return FirstStep
        case 1:
          return SecondStep
        case 2:
          return ThirdStep
        default:
          return null
      }
    }
  },

  methods: {
    nextStep() {
      // if (this.stepActive < 2) {
      //   // 진행중
      //   this.stepActive++
      // } else {
      //   // 마지막 스텝
      //   return
      // }
      /** @test */
      if (this.stepActive++ > 2) this.stepActive = 0
    },
    formStep(data, name) {
      console.log(data, name)
    }
  }
}
</script>
