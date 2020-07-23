<template>
  <el-form :model="form" ref="form" label-width="auto" label-position="right">
    <el-form-item label="테마 색상">
      <el-color-picker v-model="form.themeColor" />
      <div class="description">
        <i
          class="el-icon-warning-outline"
          :style="{ color: '#E6A23C', fontSize: '1rem', marginRight: '4px' }"
        ></i>
        지정한 색상은 Fairy의 배경색 등 다양한 요소를 해당 배경색으로
        초기화합니다.
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import StepMixins from './StepMixins'

export default {
  name: 'SecondStep',

  mixins: [StepMixins],

  data: () => ({
    form: {
      themeColor: '#9400D3'
    }
  })
}
</script>

<style scoped>
.description {
  font-size: 0.9rem;
  color: gray;
  line-height: 1.6;
  letter-spacing: -0.5px;
}
</style>
