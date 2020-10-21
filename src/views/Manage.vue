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
            <el-form ref="searchForm">
              <el-form-item>
                <el-input
                  type="text"
                  v-model="secretID"
                  placeholder="아이디를 입력하세요"
                >
                  <div slot="prepend">비공개 아이디</div>
                  <el-button slot="append">
                    조회
                    <i class="el-icon-right el-icon-search"></i>
                  </el-button>
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-divider />
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
  },

  data: () => ({
    secretID: ''
  })
}
</script>

<style lang="scss" scoped>
.inner {
  & .form {
  }
}
</style>
