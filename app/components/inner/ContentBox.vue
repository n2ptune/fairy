<template>
  <div class="content-box" @click="detail">
    <div v-if="!isLoading" class="content">
      <p class="title">
        {{ title }}
      </p>
      <p v-if="!rss" class="body">
        {{ body }}
      </p>
    </div>
    <div v-else class="loading">
      <content-placeholders :rounded="true">
        <content-placeholders-text :lines="4" />
      </content-placeholders>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

const LIMIT_TITLE_LENGTH = 40
const LIMIT_BODY_LENGTH = 100

/**
 * @typedef {object} Content
 * @property {string} title
 * @property {string} body
 */
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    content: {
      /** @type {import('vue').PropType<Content>} */
      type: Object,
      required: false,
      default: () => ({})
    },
    rss: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    title() {
      let title = ''

      if (this.content.title.length > LIMIT_TITLE_LENGTH) {
        title =
          this.content.title.substring(0, LIMIT_TITLE_LENGTH).trim() + '...'
      } else {
        title = this.content.title
      }

      return title
    },
    body() {
      let body = ''

      if (this.content.body.length > LIMIT_BODY_LENGTH) {
        body = this.content.body.substring(0, LIMIT_BODY_LENGTH).trim() + '...'
      } else {
        body = this.content.body
      }

      return body
    }
  },

  methods: {
    ...mapMutations({
      mutateDetailContent: 'detail/SET_CONTENT',
      mutateDetailActive: 'detail/SWITCH_ACTIVE'
    }),
    detail() {
      if (this.isLoading) return

      this.mutateDetailContent(this.content)
      this.mutateDetailActive()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';

.content-box {
  position: relative;
  top: -3.5rem;
  margin: 0.5rem 0;
  padding: 1rem;

  border-radius: 7px;
  background-color: white;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  transition: transform 0.5s ease, box-shadow 0.35s ease;

  &:hover {
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-3.5%);
  }

  & .title,
  & .body {
    margin: 0;
    word-break: break-all;
  }

  & .title {
    color: $color-dodger-blue;
    font-weight: bold;
  }

  & .body {
    margin: 0.5rem 0;
    font-size: 0.85rem;
  }
}
</style>
