<template>
  <el-form ref="form" :model="form" class="form">
    <div class="wrap">
      <h1>
        사이트 정보 입력
      </h1>
      <el-form-item label="사이트 이름">
        <el-input
          type="text"
          v-model="form.siteName"
          maxlength="20"
          show-word-limit
          placeholder="20자 이내"
        ></el-input>
      </el-form-item>
      <el-form-item label="사이트 주소">
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
      <el-form-item label="베이스 색상 지정">
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
        <!-- @TODO: THIS!! -->
        <span :style="{ float: 'right', marginBottom: '0.5rem' }">
          <el-button
            type="danger"
            icon="el-icon-close"
            circle
            size="mini"
            slot="reference"
            @click="deleteContent(index)"
          />
        </span>
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
      if (this.form.contents.length > 4) return

      this.form.contents.push({
        title: '',
        body: ''
      })
    },
    deleteContent(index) {
      console.log(index)
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
