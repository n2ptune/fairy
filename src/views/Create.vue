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
          <Preview v-if="componentByStep" />
          <Create v-else :ref="refFormName" />
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
    ResponsiveContainer,
    Create,
    Preview
  },

  data: () => ({
    stepActive: 0,
    refFormName: 'createForm'
  }),

  computed: {
    componentByStep() {
      return !!this.stepActive
    }
  },

  methods: {
    nextStep() {
      const { contents, siteAddr, siteName, themeColor } = this.$refs[
        this.refFormName
      ].form

      // 컨텐츠 갯수 부족
      if (!contents.length) {
        // 처리
        return
      }

      const validateContents = content => {
        return content.title.length >= 5 && content.body.length >= 10
      }

      // 컨텐츠 검증 실패
      // (제목 5자 이상, 내용 10자 이상)
      if (!contents.every(validateContents)) {
        // 처리
        return
      }

      // 주소, 이름, 테마 색 검증
      if (!siteAddr || !siteName || !themeColor) {
        // 처리
        return
      }

      alert('성공!')
    }
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
