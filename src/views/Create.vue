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
            <Create
              :ref="refFormName"
              :update="isUpdateProcess"
              :update-data="previewData"
            />
          </keep-alive>
        </div>
        <div v-if="!stepActive" class="step-footer text-center">
          <el-button @click="nextStep"> 다음 </el-button>
        </div>
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import Create from '@/components/form/Create.vue'
import Preview from '@/components/form/Preview.vue'
import { createFairy, updateFairy } from '@/api/create'
import { validateContent } from '@/api/validate'

export default {
  components: {
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
      const { isRSS } = this.$refs[this.refFormName]
      const { contents, siteAddr, siteName, themeColor, rssAddr } = this.$refs[
        this.refFormName
      ].form

      const isValidated = validateContent({
        siteAddr,
        siteName,
        themeColor,
        isRSS,
        rssAddr,
        contents
      })

      if (isValidated.status === 'Error') {
        return this.$notify({
          type: 'error',
          title: isValidated.title,
          message: isValidated.message
        })
      }

      const loadingForWaitCreate = this.$loading({
        lock: true,
        text: '데이터 저장중...',
        background: 'rgba(255, 255, 255, 0.85)',
        customClass: 'full-loading-orange'
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
          { contents, siteAddr, siteName, themeColor, isRSS, rssAddr },
          this.isUpdateProcess.id
        )
          .then(alreadyNextStep)
          .catch(errorHandler)
          .finally(loadingHandler)
      } else {
        // 업데이트가 아닐 경우
        createFairy({
          contents,
          siteAddr,
          siteName,
          themeColor,
          isRSS,
          rssAddr
        })
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

<style scoped>
.step-contents {
  margin: 3rem 0;
}
.step-footer {
  margin: 3rem 0;
}
</style>
