<template>
  <div>Preview</div>
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
