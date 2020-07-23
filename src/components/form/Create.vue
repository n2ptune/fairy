<template>
  <el-form ref="form" :model="form" class="form">
    <div class="wrap">
      <h1>
        사이트 정보 입력
      </h1>
      <el-form-item label="사이트 이름">
        <el-input
          type="text"
          v-model="form.siteName"
          maxlength="20"
          show-word-limit
          placeholder="20자 이내"
        ></el-input>
      </el-form-item>
      <el-form-item label="사이트 주소">
        <el-input type="url" v-model="form.siteAddr" placeholder="example.com">
          <template #prepend>
            https://
          </template>
        </el-input>
      </el-form-item>
    </div>
    <el-divider />
    <div class="wrap">
      <h1>
        테마 지정
      </h1>
    </div>
  </el-form>
</template>

<script>
export default {
  data: () => ({
    form: {
      siteName: '',
      siteAddr: ''
    }
  })
}
</script>

<style scoped>
.form {
  padding: 1.5rem 0;
}
.wrap > h1 {
  font-weight: bold;
}
</style>
