<template>
  <div>
    <el-divider />
    <h1>Fairy 등록 완료</h1>
    <h3>
      아래 코드를 HTML 페이지에 삽입해주세요.
    </h3>
    <div class="code-wrap">
      <Prism language="html" :code="generatedCode" />
      <div class="icon" @click="copyCode">
        <i class="el-icon-magic-stick"></i>
      </div>
    </div>
    <div class="preview-alert">
      <h3>
        입력한 정보로 <strong>Fairy</strong> 미리보기가 생성되었습니다. 우측
        하단을 확인해주세요.
      </h3>
    </div>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'
import { generateCode } from '@/functions/create'

export default {
  components: {
    Prism
  },

  props: {
    fairyId: {
      type: String,
      required: true
    }
  },

  data: () => ({
    generatedCode: null,
    loadedFairy: false
  }),

  created() {
    this.generatedCode = generateCode(this.fairyId)
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

        fs.onload = () => {
          this.loadedFairy = true
        }
      })(document, 'fairy-app-inject')
    }
  },

  methods: {
    copyCode() {
      /* eslint no-unused-vars: "off" */
      this.$copyText(this.generatedCode).then(
        e => {
          this.$notify({
            type: 'success',
            title: '코드 복사됨',
            message:
              '코드가 복사되었습니다. 삽입하고 싶은 페이지에 코드를 붙여넣어 주세요.',
            showClose: true
          })
        },
        e => {
          this.$notify({
            type: 'error',
            title: '코드를 복사할 수 없음',
            message: '코드를 복사할 수 없습니다.',
            showClose: true
          })
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.code-wrap {
  position: relative;

  & .icon {
    font-size: 1.25rem;
    bottom: 20px;
    right: 15px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    position: absolute;
    transition: color 0.35s ease;

    &:hover {
      color: white;
    }
  }
}

.preview-alert {
  margin: 1rem 0;
}
</style>
