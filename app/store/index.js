import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    fairy: {
      active: {
        fairy: false,
        contents: false
      }
    },
    data: null
  }),

  mutations: {
    SET_FAIRY_STATUS(state, data) {
      if (data) {
        state.fairy = {
          ...state.fairy,
          ...data
        }
      }
    },

    SET_FAIRY_ACTIVE(state, active) {
      state.fairy.active.fairy = active
    },

    SET_FAIRY_CONTENTS_ACTIVE(state, active) {
      state.fairy.active.contents = active
    },

    SET_FAIRY_DATA(state, data) {
      if (!state.data) {
        state.data = data
      }
    },

    SET_FAIRY_CONTENTS(state, contents) {
      if (!state.data.contents) {
        state.data.contents = contents
      }
    }
  },

  getters: {
    getFairyActive(state) {
      return state.fairy.active.fairy
    },

    getContentActive(state) {
      return state.fairy.active.content
    },

    getActive(state) {
      return state.fairy.active
    },

    getServerURL(state) {
      return state.fairy.url
    },

    getFairyID(state) {
      return state.fairy.id
    },

    getFairyData(state) {
      return state.data
    }
  },

  actions: {
    loadFairy({ commit, getters }, id) {
      const url =
        process.env.NODE_ENV === 'production'
          ? 'http://localhost:5001/fairy-web-service/us-central1/api'
          : 'http://localhost:5001/fairy-web-service/us-central1/api'

      commit('SET_FAIRY_STATUS', { url, id })
      commit('SET_FAIRY_ACTIVE', false)
      commit('SET_FAIRY_CONTENTS_ACTIVE', false)

      return new Promise((resolve, reject) => {
        const url = getters.getServerURL + '/load/' + getters.getFairyID

        if (url) {
          axios
            .get(url)
            .then(result => {
              commit('SET_FAIRY_DATA', result.data)
              resolve()
            })
            .catch(error => reject(error))
        } else {
          reject(new Error('InvalidURL'))
        }
      })
    },

    loadContents({ state, commit }) {
      return new Promise((resolve, reject) => {
        const url = `${state.fairy.url}/load/contents/${state.fairy.id}`

        axios
          .get(url)
          .then(result => {
            commit('SET_FAIRY_CONTENTS', result.data)
            commit('SET_FAIRY_CONTENTS_ACTIVE', true)
            resolve()
          })
          .catch(error => reject(error))
      })
    }
  }
})
