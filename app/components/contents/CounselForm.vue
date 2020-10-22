<template>
  <Layout>
    <div class="counsel-form" :style="{ '--border-color': themeColor }">
      <div class="counsel-form-inner">
        <input
          v-model="form.userName"
          type="text"
          :placeholder="placeholder.userName"
          :disabled="isDisabled"
        />
        <input
          v-model="form.userEmail"
          type="email"
          :placeholder="placeholder.userEmail"
          :disabled="isDisabled"
        />
        <textarea
          v-model="form.userContent"
          rows="10"
          :placeholder="placeholder.userContent"
          :disabled="isDisabled"
        />
        <button class="submit" :disabled="isDisabled" @click="submitForm">
          문의하기
        </button>
        <transition name="appear-bottom" appear>
          <div v-if="isCompleted" class="completed-message">
            {{ statusMessage }}
          </div>
        </transition>
      </div>
    </div>
  </Layout>
</template>

<script>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch
} from '@vue/composition-api'
import axios from 'axios'
import Layout from './Layout.vue'

export default defineComponent({
  components: {
    Layout
  },

  setup(_, { root: { $store: store } }) {
    const form = reactive({
      userName: '',
      userEmail: '',
      userContent: ''
    })
    const isCompleted = ref(false)
    const isDisabled = ref(false)
    const status = ref('')
    const statusMessage = computed(() => {
      return !status.value
        ? ''
        : status.value === 'error'
        ? '오류가 발생하였습니다. 잠시 후 다시 시도해주세요.'
        : '문의하신 내용이 접수되었습니다.'
    })
    const placeholder = {
      userName: '이름 혹은 닉네임',
      userEmail: '회신받을 이메일',
      userContent: '전달할 내용'
    }

    const { themeColor } = store.getters.getFairyData

    watch(isCompleted, (_isCompleted, _) => {
      if (_isCompleted) {
        setTimeout(() => {
          isCompleted.value = false
          isDisabled.value = false
        }, 5000)
      }
    })

    const submitForm = () => {
      if (form.userContent.length >= 10) {
        isCompleted.value = true
        isDisabled.value = true

        const qs = require('qs')

        axios
          .post(
            '/counsel/write',
            qs.stringify({
              message: form.userContent,
              userName: form.userName,
              userEmail: form.userEmail,
              id: store.getters.getFairyID
            }),
            {
              baseURL: store.getters.getServerURL,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          )
          .then(() => (status.value = 'success'))
          .catch(_e => (status.value = 'error'))
          .finally(() => {
            form.userContent = ''
            form.userName = ''
            form.userEmail = ''
          })
      } else {
        return
      }
    }

    return {
      form,
      placeholder,
      themeColor,
      submitForm,
      isCompleted,
      isDisabled,
      statusMessage
    }
  }
})
</script>

<style lang="scss" scoped>
.appear-bottom {
  &-enter-active,
  &-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(30%);
  }

  &-enter-to,
  &-leave {
    opacity: 1;
    transform: translateY(0);
  }
}

@import '@app/styles/_variables.scss';

.contents {
  top: 0;
  height: 100%;
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

      &:disabled {
        background-color: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 0.5);
        border-color: transparent;
      }
    }

    & .completed-message {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
