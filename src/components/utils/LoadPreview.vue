<template>
  <div>
    <el-divider />
    <h1>Fairy 등록 완료</h1>
    <p>아이디 : {{ fairyId }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fairyId: {
      type: String,
      required: true
    }
  },

  mounted() {
    const src =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/dist/fairy.app.js'
        : null

    if (src) {
      window.FAIRY_APP = {
        id: this.fairyId
      }
      ;(function(t, i) {
        if (t.getElementById(i)) return

        var fs = t.createElement('script')
        var ta = t.getElementsByTagName('script')[0]
        fs.async = true
        fs.src = src
        ta.parentNode.insertBefore(fs, ta)
      })(document, 'fairy-app-inject')
    }
  }
}
</script>
