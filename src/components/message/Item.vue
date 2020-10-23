<template>
  <el-card class="item">
    <div slot="header" class="header">
      <div class="user-name">
        {{ userName }}
      </div>
      <div class="user-email">
        {{ userEmail }}
      </div>
      <div class="timestamp">
        {{ formatDate }}
      </div>
    </div>
    <div slot="default">
      {{ message.body }}
    </div>
  </el-card>
</template>

<script>
import { convertTimestampToDate, dateFormatKorean } from '@/api/time'

export default {
  props: {
    message: {
      type: Object
    }
  },

  computed: {
    userName() {
      return this.message.userName || '이름 없음'
    },
    userEmail() {
      return this.message.userEmail || '이메일 없음'
    },
    formatDate() {
      return dateFormatKorean(convertTimestampToDate(this.message.ts))
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 0.85rem;
  border-radius: 12px;
  border: 1px solid #eee;

  & .header {
    & .user-name {
      font-weight: bold;
    }

    & .user-email {
      color: darkgray;
    }

    & .timestamp {
      margin-top: 1rem;
      font-size: 0.85rem;
      color: darkgray;
    }
  }
}
</style>
