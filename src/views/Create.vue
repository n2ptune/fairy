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
              description="입력한 내용 혹은 컨텐츠 한번 더 확인"
            ></el-step>
          </el-steps>
        </div>
        <div class="step-contents">
          <Preview
            v-if="componentByStep"
            :preview-data="previewData"
            @cancel-accept="cancelAccept"
          />
          <keep-alive v-else>
            <Create :ref="refFormName" />
          </keep-alive>
        </div>
        <div v-if="!stepActive" class="step-footer text-center">
          <el-button @click="nextStep">
            다음
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
import { createFairy, updateFairy } from '@/functions/create'

export default {
  components: {
    ResponsiveContainer,
    Create,
    Preview
  },

  data: () => ({
    stepActive: 0,
    refFormName: 'createForm',
    previewData: null,
    isUpdateProcess: false
  }),

  computed: {
    componentByStep() {
      return !!this.stepActive
    }
  },

  methods: {
    cancelAccept(fairyID) {
      this.isUpdateProcess = {
        status: true,
        id: fairyID
      }
      this.stepActive = 0

      this.$nextTick(() => {
        this.$refs[this.refFormName].form = this.previewData
      })
    },
    nextStep() {
      const { contents, siteAddr, siteName, themeColor } = this.$refs[
        this.refFormName
      ].form

      // 주소, 이름, 테마 색 검증
      if (!siteAddr || !siteName || !themeColor) {
        return this.$notify({
          type: 'error',
          title: '필수 요소 누락',
          message:
            '사이트 주소와 이름 그리고 테마 색은 반드시 지정되어야 합니다.',
          showClose: false
        })
      }

      // 컨텐츠 갯수 부족
      if (!contents.length) {
        return this.$notify({
          type: 'error',
          title: '컨텐츠 갯수 부족',
          message: '최소 하나 이상의 컨텐츠를 가져야 합니다.',
          showClose: false
        })
      }

      const validateContents = content => {
        return content.title.length >= 5 && content.body.length >= 10
      }

      // 컨텐츠 검증 실패
      // (제목 5자 이상, 내용 10자 이상)
      if (!contents.every(validateContents)) {
        return this.$notify({
          type: 'error',
          title: '컨텐츠 제목과 내용의 길이 부적절',
          message:
            '컨텐츠 제목은 5자 이상 내용은 10자 이상이 포함되어야 합니다.',
          showClose: false
        })
      }

      const loadingForWaitCreate = this.$loading({
        lock: true,
        text: '데이터 저장중...',
        background: 'rgba(255, 255, 255, 0.85)',
        customClass: 'full-loading-create'
      })

      const alreadyNextStep = fairy => {
        this.stepActive++
        this.previewData = fairy
      }

      const errorHandler = error =>
        this.$notify({
          type: 'error',
          title: error.title,
          message: error.message,
          showClose: false
        })

      const loadingHandler = () => loadingForWaitCreate.close()

      if (this.isUpdateProcess) {
        // 업데이트일 경우
        updateFairy(
          { contents, siteAddr, siteName, themeColor },
          this.isUpdateProcess.id
        )
          .then(alreadyNextStep)
          .catch(errorHandler)
          .finally(loadingHandler)
      } else {
        // 업데이트가 아닐 경우
        createFairy({ contents, siteAddr, siteName, themeColor })
          .then(fairy => {
            this.stepActive++
            this.previewData = fairy
          })
          .catch(errorHandler)
          .finally(loadingHandler)
      }
    }
  }
}
</script>

<style lang="scss">
.full-loading-create {
  $--loading-color: #f05408;

  & .el-loading-text {
    color: $--loading-color !important;
  }

  & .path {
    stroke: $--loading-color !important;
  }
}
</style>

<style scoped>
.step-contents {
  margin: 3rem 0;
}
.step-footer {
  margin: 3rem 0;
}
</style>
