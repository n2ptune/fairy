<template>
  <transition name="from-bottom" appear>
    <div class="content-container">
      <ul v-if="active.contents" class="content-list">
        <li
          v-for="content in contents"
          :key="content.title"
          class="content-wrap"
        >
          <ContentBox :isLoading="false" :content="content" :rss="isRSS" />
        </li>
      </ul>
      <div v-else class="content-loading-container">
        <ContentBox v-for="i in 3" :key="i" :isLoading="true" />
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, defineComponent, ref } from '@vue/composition-api'
import ContentBox from './ContentBox.vue'

export default defineComponent({
  components: {
    ContentBox
  },

  setup(_, { root: { $store: store } }) {
    const contents = ref(null)
    const active = computed(() => store.getters.getActive)
    const isRSS = computed(() => store.getters.getIsRSS)
    const rssData = computed(() => store.getters.getRSSData)
    const defaultData = computed(() => store.getters.getFairyData)

    const setContents = () => {
      contents.value = isRSS.value
        ? rssData.value.items
        : defaultData.value.contents
    }

    if (!active.value.contents) {
      store
        .dispatch('loadContents')
        .then(setContents)
        .catch(error => console.error(error))
    } else {
      setContents()
    }

    return {
      contents,
      active,
      isRSS,
      rssData,
      defaultData
    }
  }
})
</script>

<style lang="scss" scoped>
.from-bottom {
  &-enter-active {
    transition: opacity 0.4s ease, transform 0.4s ease-in-out;
  }

  &-enter {
    transform: translateY(15%);
    opacity: 0.15;
  }

  &-enter-to {
    transform: translateY(0);
    opacity: 1;
  }
}

.content-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
