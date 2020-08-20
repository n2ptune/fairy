/** @type {import('vuex').StoreOptions} */
const detail = {
  state: () => ({
    content: {
      title: null,
      body: null
    },
    active: false
  }),

  mutations: {
    SET_CONTENT(state, content) {
      state.content = content
    },

    SWITCH_ACTIVE(state) {
      state.active = !state.active
    }
  },

  getters: {
    getContent(state) {
      return state.content
    },

    getActive(state) {
      return state.active
    }
  },

  actions: {},

  namespaced: true
}

export default detail
