<template>
  <div class="content-box" @click="detail">
    <div v-if="!isLoading" class="content">
      <p class="title">
        {{ title }}
      </p>
      <p v-if="!rss" class="body">
        {{ body }}
      </p>
      <p v-else class="body rss-date">
        {{ formattedDate }}
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
import { computed, defineComponent } from '@vue/composition-api'

const LIMIT_TITLE_LENGTH = 40
const LIMIT_BODY_LENGTH = 100

/**
 * @typedef {{
 * title: String,
 * body: String,
 * md: String,
 * isoDate?: String
 * link?: String
 * }} Content
 */
export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    content: {
      /** @type {Content} */
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

  setup(props, { root }) {
    const title = computed(() => {
      let splitedTitle = ''

      if (props.content.title.length > LIMIT_TITLE_LENGTH) {
        splitedTitle =
          props.content.title.substring(0, LIMIT_TITLE_LENGTH).trim() + '...'
      } else {
        splitedTitle = props.content.title
      }

      return splitedTitle
    })

    const body = computed(() => {
      let onlyText = props.content.body.replaceAll(/<[^>]*>/g, '')

      if (onlyText.length > LIMIT_BODY_LENGTH) {
        onlyText = onlyText.substring(0, LIMIT_BODY_LENGTH).trim() + '...'
      }

      return onlyText
    })

    const formattedDate = computed(() => {
      if (!props.content.isoDate) {
        return null
      }

      const date = new Date(props.content.isoDate)

      return `${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월 ${date.getDate()}일`
    })

    const mutateDetailContent = content => {
      root.$store.commit('detail/SET_CONTENT', content)
    }

    const mutateDetailActive = () => {
      root.$store.commit('detail/SWITCH_ACTIVE')
    }

    const detail = () => {
      if (props.isLoading) return

      // RSS
      if (props.rss) {
        if (!props.content.link) return

        return window.open(props.content.link, '_blank')
      }

      mutateDetailContent(props.content)
      mutateDetailActive()
    }

    return {
      title,
      body,
      formattedDate,
      detail
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@app/styles/_variables.scss';

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
    color: rgb(48, 48, 48);
    font-weight: bold;
  }

  & .body {
    margin: 0.5rem 0;
    font-size: 0.92rem;
    color: rgb(68, 68, 68);
  }
}
</style>
