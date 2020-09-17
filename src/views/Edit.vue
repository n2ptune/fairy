<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <Form
          ref="editForm"
          v-loading="isDataLoading"
          element-loading-text="데이터 입력 대기중..."
          element-loading-custom-class="loading-spinner"
          :update="true"
          :update-data="updateData"
        />
        <div class="edit-button-wrap">
          <el-divider />
          <el-button
            :loading="isUpdateButtonLoading"
            icon="el-icon-check"
            type="success"
            round
            @click="editFairy"
          >
            수정하기
          </el-button>
        </div>
        <el-dialog
          :visible.sync="isActiveDialog"
          :close-on-click-modal="false"
          :close-on-press-escape="false"
          custom-class="edit-dialog"
          title="Fairy 정보를 수정할 아이디 입력"
        >
          <el-row class="dialog-row" justify="center" type="flex">
            <el-form
              :model="dialog.form"
              :rules="dialog.form.rules"
              ref="dialogForm"
              inline
              status-icon
            >
              <el-form-item label="아이디" prop="id">
                <el-input
                  v-model="dialog.form.id"
                  ref="formID"
                  type="text"
                  autofocus
                  maxlength="20"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  :loading="dialog.form.isButtonLoading"
                  type="warning"
                  @click="submitDialogForm"
                >
                  조회
                </el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-dialog>
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import Form from '@/components/form/Create.vue'
import { getFairyDataFromID } from '@/functions/update'
import { updateFairy } from '@/functions/create'
import { validateContent } from '@/functions/validate'

export default {
  components: {
    Form
  },

  data: () => ({
    isDataLoading: true,
    isActiveDialog: true,
    isUpdateButtonLoading: false,
    updateData: null,
    dialog: {
      form: {
        id: '',
        isButtonLoading: false,
        rules: {
          id: [
            {
              validator: (rule, value, callback) => {
                if (value.length < 20) {
                  callback(new Error('아이디가 유효하지 않습니다.'))
                } else {
                  callback()
                }
              }
            }
          ]
        }
      }
    }
  }),

  methods: {
    submitDialogForm() {
      this.$refs.dialogForm.validate(valid => {
        this.dialog.form.isButtonLoading = true
        if (valid) {
          // 검증 성공
          getFairyDataFromID(this.dialog.form.id)
            .then(fairy => {
              this.updateData = fairy
              this.isDataLoading = false
              this.isActiveDialog = false
            })
            .catch(error => {
              this.$notify({
                type: 'error',
                title: error.name,
                message: error.message,
                duration: 3000,
                showClose: false,
                position: 'top-right'
              })
            })
            .finally(() => (this.dialog.form.isButtonLoading = false))
        } else {
          // 검증 실패
          this.dialog.form.isButtonLoading = false
        }
      })
    },
    editFairy() {
      if (!this.updateData) return

      const {
        siteAddr,
        siteName,
        themeColor,
        isRSS,
        rssAddr,
        contents
      } = this.$refs.editForm.form

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

      this.isDataLoading = true
      this.isUpdateButtonLoading = true

      updateFairy(
        {
          siteAddr,
          siteName,
          themeColor,
          isRSS,
          rssAddr,
          contents
        },
        this.dialog.form.id
      )
        .then(_fairy => {
          this.$notify({
            type: 'success',
            title: '업데이트 완료',
            message: '정보가 업데이트 되었습니다. 페이지에 실시간 반영됩니다.'
          })
        })
        .catch(error => {
          this.$notify({
            type: 'error',
            title: 'Erorr',
            message: error.message
          })
        })
        .finally(() => {
          this.isDataLoading = false
          this.isUpdateButtonLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_variables.scss';
@import '@/assets/css/_breakpoints.scss';

::v-deep .loading-spinner {
  color: $color-dark-header-default;

  & svg circle {
    stroke: $color-dark-header-default;
    stroke-width: 3;
  }

  & .el-loading-text {
    color: inherit;
  }
}

.dialog-row {
  font-size: 16px;

  &::v-deep .el-input .el-input__inner {
    &:focus {
      border-color: $color-dark-header-default;
    }
  }
}

::v-deep .edit-dialog {
  width: 95%;
  max-width: 700px;
}

.edit-button-wrap {
  text-align: right;
}
</style>
