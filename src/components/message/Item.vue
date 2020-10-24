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
      <div class="icon">
        <el-popconfirm
          title="메세지를 삭제할까요?"
          icon="el-icon-delete"
          iconColor="#ED2939"
          confirmButtonText="삭제"
          cancelButtonText="취소"
          confirmButtonType="danger"
          cancelButtonType="info"
          @onConfirm="deleteMessage"
        >
          <el-button
            slot="reference"
            type="danger"
            icon="el-icon-delete"
            circle
            size="small"
          />
        </el-popconfirm>
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
  },

  methods: {
    deleteMessage() {
      console.log(this.message)
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
    position: relative;
    word-break: break-all;

    & .user-name {
      font-weight: bold;
      padding-right: 4rem;
    }

    & .user-email {
      color: darkgray;
    }

    & .timestamp {
      margin-top: 1rem;
      font-size: 0.85rem;
      color: darkgray;
    }

    & .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
