<template>
  <transition name="oo" appear>
    <el-dialog
      :visible="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      custom-class="markdown-dialog"
    >
      <template #title>
        <div class="title">Markdown Edit ({{ index + 1 }}번째 컨텐츠)</div>
      </template>
      <div>
        <MarkdownEditor
          v-model="content"
          :configs="mdeConfig"
          ref="dialogMarkdownEditor"
        />
      </div>
      <template #footer>
        <div class="button-container">
          <el-button
            type="warning"
            v-bind="buttonCommonOptions"
            icon="el-icon-close"
            @click="closeDialog"
          >
            취소
          </el-button>
          <el-button
            type="success"
            v-bind="buttonCommonOptions"
            icon="el-icon-edit"
            @click="submitDialog"
          >
            저장
          </el-button>
        </div>
      </template>
    </el-dialog>
  </transition>
</template>

<script>
import MarkdownEditor from 'vue-simplemde'

export default {
  props: {
    index: {
      type: Number,
      required: false,
      default: null
    },
    md: {
      type: String,
      required: false,
      default: ''
    }
  },

  components: {
    MarkdownEditor
  },

  data: () => ({
    mdeConfig: {
      autofocus: true
    },
    content: '',
    buttonCommonOptions: {
      round: true,
      plain: true
    }
  }),

  computed: {
    /** @return {import('simplemde/src/js/simplemde')} */
    mde() {
      return this.$refs.dialogMarkdownEditor.simplemde
    }
  },

  created() {
    this.content = this.md
  },

  methods: {
    closeDialog() {
      this.$emit('close')
    },
    submitDialog() {
      this.$emit('submit', {
        index: this.index,
        html: this.mde.markdown(this.content),
        md: this.mde.value()
      })

      this.content = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~simplemde/dist/simplemde.min.css';
@import '@/assets/css/_variables.scss';
@import '@/assets/css/_breakpoints.scss';

.oo-enter-active,
.oo-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.oo-enter {
  transform: translateY(10%);
}

.oo-leave-to {
  transform: translateY(-10%);
}

.oo-enter,
.oo-leave-to {
  opacity: 0;
}

.oo-enter-to,
.oo-leave {
  opacity: 1;
  transform: translateY(0);
}

.el-dialog__wrapper {
  &::v-deep .markdown-dialog {
    max-width: $dialog-max-width;
    width: auto;
    // will-change: transform;

    @include mobile {
      margin: auto 10px;
    }
  }

  .vue-simplemde {
    &::v-deep .CodeMirror:not(.CodeMirror-fullscreen) .CodeMirror-scroll {
      max-height: $dialog-mde-max-height;
    }
  }
}
</style>
