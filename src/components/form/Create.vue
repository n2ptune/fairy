<template>
  <el-form :model="form" class="form" :rules="rules">
    <div class="wrap">
      <h1>
        사이트 정보 입력
      </h1>
      <el-form-item label="사이트 이름" required prop="siteName">
        <el-input
          type="text"
          v-model="form.siteName"
          maxlength="20"
          show-word-limit
          placeholder="20자 이내"
        ></el-input>
      </el-form-item>
      <el-form-item label="사이트 주소" required prop="siteAddr">
        <el-input type="url" v-model="form.siteAddr" placeholder="example.com">
          <template #prepend>
            https://
          </template>
        </el-input>
      </el-form-item>
    </div>
    <el-divider />
    <div class="wrap">
      <h1>
        테마 지정
      </h1>
      <el-form-item label="베이스 색상 지정" required>
        <el-color-picker
          :predefine="predefineColors"
          v-model="form.themeColor"
        />
        <div class="description">
          해당 색상은 Fairy의 전반적인 색상을 지정합니다.
        </div>
      </el-form-item>
    </div>
    <el-divider />
    <div class="wrap">
      <h1>
        Fairy가 보여줄 컨텐츠 입력
      </h1>
      <el-form-item
        v-for="(content, index) in form.contents"
        :key="index"
        :label="`컨텐츠 - ${index + 1}`"
      >
        <el-popconfirm
          confirmButtonText="예"
          cancelButtonText="아니오"
          title="해당 컨텐츠를 삭제하시겠습니까?"
          @onConfirm="deleteContent(index)"
        >
          <span
            :style="{ float: 'right', marginBottom: '0.5rem' }"
            slot="reference"
          >
            <el-button type="danger" icon="el-icon-close" circle size="mini" />
          </span>
        </el-popconfirm>
        <el-input
          v-model="content.title"
          type="text"
          placeholder="제목"
        ></el-input>
        <el-input
          v-model="content.body"
          type="textarea"
          placeholder="내용"
          :autosize="{ minRows: 5, maxRows: 7 }"
          :style="{ marginTop: '1rem' }"
        ></el-input>
      </el-form-item>
      <el-button round @click="appendContent">
        컨텐츠 추가하기
        <i class="el-icon-plus el-icon-right" />
      </el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  data: () => ({
    form: {
      siteName: '',
      siteAddr: '',
      themeColor: '#CF0063',
      contents: [
        {
          title: '',
          body: ''
        }
      ]
    },
    rules: {
      siteName: [
        {
          required: true,
          message: '사이트 이름은 반드시 입력해야 합니다.',
          trigger: 'blur'
        },
        {
          max: 20,
          min: 1,
          message: '사이트 이름은 최소 1글자 최대 20글자 이하여야 합니다.',
          trigger: 'blur'
        }
      ],
      siteAddr: [
        {
          required: true,
          message: '사이트 주소는 반드시 입력해야 합니다.',
          trigger: blur
        },
        {
          /**
           * @param {Object} r
           * @param {String} v
           * @param {Function} cb
           */
          validator: (r, v, cb) => {
            const reg = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm
            const url = 'https://' + v
            const isURL = reg.test(url)

            if (isURL) {
              if (url.includes('?') || url.includes('&')) {
                cb(new Error('사이트 주소에 "?"나 "&"를 포함시킬 수 없습니다.'))
              } else {
                cb()
              }
            } else {
              cb(new Error('유효한 사이트 주소가 아닙니다.'))
            }
          }
        }
      ]
    },
    predefineColors: [
      '#D2082D',
      '#5E2728',
      '#967ADC',
      '#D770AD',
      '#434A54',
      '#E0C341',
      '#7DB1B1'
    ]
  }),

  methods: {
    appendContent() {
      if (this.form.contents.length > 4) {
        return this.$notify({
          type: 'error',
          title: '컨텐츠를 추가할 수 없음',
          message: '컨텐츠는 최대 5개까지 만들 수 있습니다.',
          showClose: false
        })
      }

      this.form.contents.push({
        title: '',
        body: ''
      })
    },
    deleteContent(index) {
      if (this.form.contents.length > 1) {
        this.form.contents.splice(index, 1)
      } else {
        this.$notify({
          type: 'error',
          title: '컨텐츠를 제거할 수 없음',
          message: '최소 하나 이상의 컨텐츠를 가져야 합니다.',
          showClose: false
        })
      }
    }
  }
}
</script>

<style scoped>
.form {
  padding: 1.5rem 0;
}
.wrap > h1 {
  font-weight: bold;
}
.description {
  padding: 0 0.6rem;
  font-size: 0.9rem;
  color: darkgray;
  letter-spacing: -0.2px;
}
.el-textarea >>> textarea {
  font-family: inherit;
}
</style>
