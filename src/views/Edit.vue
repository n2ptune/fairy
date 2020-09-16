<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <Form
          v-loading="isDataLoading"
          element-loading-text="데이터 입력 대기중..."
          element-loading-custom-class="loading-spinner"
          :update="true"
        />
        <el-dialog
          :visible.sync="isActiveDialog"
          :close-on-click-modal="false"
          :close-on-press-escape="false"
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

export default {
  components: {
    Form
  },

  data: () => ({
    isDataLoading: true,
    isActiveDialog: true,
    dialog: {
      form: {
        id: '',
        // validated: false,
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
          // Test
          setTimeout(() => (this.dialog.form.isButtonLoading = false), 1000)
        } else {
          // 검증 실패
          // Test
          setTimeout(() => (this.dialog.form.isButtonLoading = false), 1000)
        }

        // this.dialog.form.isButtonLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/_variables.scss';

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
</style>
