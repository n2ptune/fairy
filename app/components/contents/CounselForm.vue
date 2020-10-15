<template>
  <Layout>
    <div class="counsel-form" :style="{ '--border-color': themeColor }">
      <div class="counsel-form-inner">
        <input
          v-model="form.userName"
          type="text"
          :placeholder="placeholder.userName"
        />
        <input
          v-model="form.userEmail"
          type="email"
          :placeholder="placeholder.userEmail"
        />
        <textarea
          v-model="form.userContent"
          rows="10"
          :placeholder="placeholder.userContent"
        />
        <button class="submit">문의하기</button>
      </div>
    </div>
  </Layout>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import Layout from './Layout.vue'

export default defineComponent({
  components: {
    Layout
  },

  setup(_, { root }) {
    const form = ref({
      userName: '',
      userEmail: '',
      userContent: ''
    })
    const placeholder = {
      userName: '이름 혹은 닉네임',
      userEmail: '회신받을 이메일',
      userContent: '전달할 내용'
    }

    const { themeColor } = root.$store.getters.getFairyData

    return {
      form,
      placeholder,
      themeColor
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@styles/_variables.scss';

.contents {
  top: 0;
}

.counsel-form {
  &-inner {
    & textarea {
      resize: none;
    }

    & > * + * {
      margin-top: 0.5rem;
    }

    & input,
    textarea {
      font: inherit;
      font-size: 14px;
      border: 1px solid #ccc;
      padding: 5px 8px;
      width: 100%;
      transition: border-color 500ms ease;

      &:focus {
        border-color: var(--border-color);
        border-width: 1px;
        border-style: solid;
        outline: none;
      }
    }

    & button.submit {
      margin-top: 1rem;
      width: 100%;
      padding: 10px;
      background-color: transparent;
      color: var(--border-color);
      border: 1px solid var(--border-color);
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.4s ease, color 0.4s ease;

      &:focus {
        outline: none;
      }

      &:hover {
        color: white;
        background-color: var(--border-color);
      }
    }
  }
}
</style>
