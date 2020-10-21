<template>
  <el-container>
    <el-main>
      <ResponsiveContainer>
        <div class="inner">
          <div class="header">
            <h1>메세지 관리 시스템</h1>
            <h3>여기에서 사용자가 보내온 메세지를 관리할 수 있습니다.</h3>
          </div>
          <el-divider />
          <div class="form">
            <el-form
              :model="form"
              :rules="form.rules"
              ref="searchForm"
              status-icon
              @submit.native.prevent
            >
              <el-form-item prop="secretID">
                <span slot="error"></span>
                <el-input
                  ref="searchFormInput"
                  type="text"
                  v-model="form.secretID"
                  placeholder="아이디를 입력하세요"
                  maxlength="20"
                  @keyup.native.enter="searchFairyID"
                >
                  <div slot="prepend">비공개 아이디</div>
                  <el-button
                    slot="append"
                    icon="el-icon-search"
                    :disabled="isLoad"
                    :loading="buttonLoading"
                    @click="searchFairyID"
                  >
                    조회
                  </el-button>
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-divider />
          <div v-if="isLoad" class="messages">message</div>
        </div>
      </ResponsiveContainer>
    </el-main>
  </el-container>
</template>

<script>
import ResponsiveContainer from '@/components/utils/ResponsiveContainer.vue'
import { fetchMessage } from '@/api/fetch'

export default {
  components: {
    ResponsiveContainer
  },

  data: () => ({
    isLoad: false,
    buttonLoading: false,
    form: {
      secretID: '',
      rules: {
        secretID: [
          {
            validator: (_r, v, callback) => {
              if (!v.length || v.length < 20) {
                callback(new Error())
              } else {
                callback()
              }
            }
          }
        ]
      }
    }
  }),

  methods: {
    searchFairyID() {
      this.buttonLoading = true

      this.$refs.searchForm.validate(valid => {
        if (valid) {
          // 메세지 불러오기 로직
          fetchMessage(this.form.secretID)
            .then(messages => {
              console.log(messages)
              this.isLoad = true
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
            .finally(() => {
              this.buttonLoading = false
            })
        } else {
          this.buttonLoading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  & .form {
  }
}
</style>
