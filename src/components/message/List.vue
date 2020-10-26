<template>
  <div class="message-list">
    <div class="header">
      <el-button
        type="success"
        round
        icon="el-icon-refresh"
        :loading="refreshing"
        @click="refresh"
      >
        {{ refreshing ? '새로고침 중...' : '메세지 새로고침' }}
      </el-button>
    </div>
    <Item
      v-for="(message, index) in sortedMessagesByDate"
      :key="index"
      :message="message"
      @delete-message="deleteMessage"
    />
  </div>
</template>

<script>
import Item from './Item.vue'
import { convertTimestampToDate } from '@/api/time'
import { fetchMessage, removeMessage } from '@/api/message'

export default {
  components: {
    Item
  },

  props: {
    messages: {
      type: Array
    },
    id: {
      type: String
    }
  },

  data: () => ({
    refreshing: false,
    isReverse: false
  }),

  computed: {
    sortedMessagesByDate() {
      const messages = this.messages
        .slice()
        .sort(
          (a, b) => convertTimestampToDate(b.ts) - convertTimestampToDate(a.ts)
        )

      return this.isReverse ? messages.reverse() : messages
    }
  },

  methods: {
    refresh() {
      this.refreshing = true

      fetchMessage(this.id)
        .then(messages => this.$emit('update-message', messages))
        .catch(error =>
          this.$notify({
            type: 'error',
            title: error.name,
            message: '새로고침 실패',
            duration: 3000,
            showClose: false,
            position: 'top-right'
          })
        )
        .finally(() => (this.refreshing = false))
    },
    deleteMessage({ _index, message }) {
      removeMessage(message, this.id)
        .then(() => {
          this.$notify({
            type: 'success',
            title: '삭제 완료',
            message: '메세지가 삭제되었습니다.'
          })
          this.refresh()
        })
        .catch(error =>
          this.$notify({
            type: 'error',
            title: '삭제 실패',
            message: error.message || '메세지 삭제에 실패했습니다.'
          })
        )
    }
  }
}
</script>

<style lang="scss" scoped>
.message-list {
  & .header {
    margin: 2rem 0;
  }
}
</style>
