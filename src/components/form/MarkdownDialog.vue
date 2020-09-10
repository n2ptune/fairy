<template>
  <el-dialog
    :visible="active"
    custom-class="markdown-dialog"
    @close="closeDialog"
  >
    <template #title>
      <div class="title">Markdown Edit ({{ index + 1 }}번째 컨텐츠)</div>
    </template>
    <div>
      <MarkdownEditor />
    </div>
  </el-dialog>
</template>

<script>
import MarkdownEditor from 'vue-simplemde'

export default {
  props: {
    active: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: false,
      default: null
    }
  },

  components: {
    MarkdownEditor
  },

  methods: {
    closeDialog() {
      this.$emit('close', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~simplemde/dist/simplemde.min.css';
@import '@/assets/css/_variables.scss';
@import '@/assets/css/_breakpoints.scss';

.el-dialog__wrapper {
  &::v-deep .markdown-dialog {
    max-width: $dialog-max-width;
    width: auto;

    @include mobile {
      margin: auto 10px;
    }
  }

  .vue-simplemde {
    &::v-deep .CodeMirror-scroll {
      max-height: $dialog-mde-max-height;
    }
  }
}
</style>
