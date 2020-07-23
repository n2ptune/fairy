<template>
  <el-form :model="form" ref="form" label-width="auto" label-position="right">
    <el-form-item label="사이트 이름">
      <el-input
        :style="{ width: '90%' }"
        v-model="form.siteName"
        :maxlength="20"
        show-word-limit
        type="text"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="사이트 주소">
      <el-input v-model="form.siteAddr" type="text">
        <template #prepend>
          https://
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import StepMixins from './StepMixins'

export default {
  name: 'FirstStep',

  mixins: [StepMixins],

  data: () => ({
    form: {
      siteName: '',
      siteAddr: ''
    }
  })
}
</script>
