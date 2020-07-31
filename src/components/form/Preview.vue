<template>
  <div>
    <h1>Fairy 생성 완료</h1>
  </div>
</template>

<script>
export default {
  props: {
    previewData: {
      type: Object,
      required: true
    }
  },

  created() {
    console.log(this.previewData)
  }
}
</script>
