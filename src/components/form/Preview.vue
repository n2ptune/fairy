<template>
  <div>
    <h1>Fairy 생성 완료</h1>
    <el-divider />
    <h2>아래와 같은 정보로 생성됨</h2>
    <div class="content-info-wrap">
      <p v-for="item in listOfPreviewData" :key="item.title">
        <span class="info-key">
          {{ item.title }}
        </span>
        <span
          class="info-value"
          :style="item.prop === 'themeColor' ? { color: item.val } : ''"
        >
          {{ item.val }}
        </span>
      </p>
    </div>
    <el-divider />
    <div>
      <h1>위의 정보로 입력을 완료시킬까요?</h1>
      <p class="desciprtion">(정보는 추후에 수정할 수 있습니다.)</p>
      <div class="accept-wrap">
        <el-button @click="accept" :disabled="accepted">
          예
        </el-button>
        <el-button @click="cancelAccept" :disabled="accepted">
          아니오 (정보 수정)
        </el-button>
      </div>
    </div>
    <LoadPreview v-if="accepted" :fairy-id="previewData.id" />
  </div>
</template>

<script>
import { convertTimestampToDate, dateFormatKorean } from '@/functions/time'
import { accpetFairy } from '@/functions/create'
import LoadPreview from '@/components/utils/LoadPreview.vue'

export default {
  components: {
    LoadPreview
  },

  props: {
    previewData: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    accepted: false
  }),

  computed: {
    time() {
      return convertTimestampToDate(this.previewData.createdAt)
    },
    timeFormat() {
      return dateFormatKorean(this.time)
    },
    listOfPreviewData() {
      const list = []

      for (const prop in this.previewData) {
        if (prop === 'siteAddrWithPrefix') {
          continue
        }
        if (typeof this.previewData[prop] === 'string') {
          let title = ''
          let sort

          switch (prop) {
            case 'id':
              title = 'Fairy 아이디'
              sort = 1
              break
            case 'siteAddr':
              title = '사이트 주소'
              sort = 3
              break
            case 'siteName':
              title = '사이트 이름'
              sort = 2
              break
            case 'themeColor':
              title = '테마 색상'
              sort = 4
              break
            case 'rssAddr':
              if (this.previewData.rssAddr) {
                title = 'RSS URL'
                sort = 7
                break
              } else {
                continue
              }
          }

          list.push({
            prop,
            title,
            val: this.previewData[prop],
            sort
          })
        } else {
          if (prop === 'createdAt') {
            list.push({
              prop,
              title: '생성된 날짜',
              val: this.timeFormat,
              sort: 5
            })
          } else if (prop === 'contents') {
            if (this.previewData.contents.length) {
              list.push({
                prop,
                title: '컨텐츠 갯수',
                val: this.previewData.contents.length + '개',
                sort: 6
              })
            }
          }
        }
      }

      return Array.from(
        new Set(list.sort((a, b) => (a.sort > b.sort ? 1 : -1)))
      )
    }
  },

  methods: {
    accept() {
      const loadingWaitForAccept = this.$loading({
        lock: true,
        text: '완료중...',
        background: 'rgba(255,255,255,0.85)',
        customClass: 'full-loading-orange'
      })

      accpetFairy(this.previewData.id)
        .then(() => {
          this.accepted = true
        })
        .catch(error => {
          this.accepted = false
          this.$notify.error({
            message: error.message,
            title: error.title
          })
        })
        .finally(() => loadingWaitForAccept.close())
    },
    cancelAccept() {
      this.$emit('cancel-accept', this.previewData.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.accept-wrap {
  margin: 2rem 0;
}

.desciprtion {
  font-size: 0.9rem;
  line-height: 0;
  color: rgba(0, 0, 0, 0.45);
}

.info {
  &-key {
    color: rgba(0, 0, 0, 0.55);
  }

  &-value {
    font-weight: bold;
    margin-left: 5px;
  }
}
</style>
