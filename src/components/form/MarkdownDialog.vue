<template>
  <transition name="oo" appear>
    <el-dialog
      :visible="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      custom-class="markdown-dialog"
      @close="closeDialog"
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
    </el-dialog>
  </transition>
</template>

<script>
import MarkdownEditor from 'vue-simplemde'

export default {
  props: {
    // active: {
    //   type: Boolean,
    //   required: true
    // },
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
    content: ''
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

  // watch: {
  //   active(bool) {
  //     if (bool) {
  //       if (this.md) {
  //         this.content = this.md
  //       }
  //     } else {
  //       this.content = ''
  //     }
  //   }
  // },

  methods: {
    closeDialog() {
      this.$emit('close', {
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
}

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
