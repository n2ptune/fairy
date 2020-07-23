<template>
  <el-form :model="form" ref="form" label-width="auto" label-position="right">
  </el-form>
</template>

<script>
import StepMixins from './StepMixins'

export default {
  name: 'ThirdStep',

  mixins: [StepMixins],

  data: () => ({
    form: {}
  })
}
</script>
