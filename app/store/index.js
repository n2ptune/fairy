import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    fairy: null,
    data: null
  }),

  mutations: {
    SET_FAIRY_DATA(state, data) {
      if (data) {
        state.fairy = data
      }
    }
  },

  getters: {},

  actions: {
    loadFairy({ commit }, id) {
      const url =
        process.env.NODE_ENV === 'production'
          ? 'http://localhost:5001/fairy-web-service/us-central1/api'
          : 'http://localhost:5001/fairy-web-service/us-central1/api'

      commit('SET_FAIRY_DATA', { url, id })

      return new Promise((resolve, reject) => {
        const url = this.url + '/load/' + this.id
        if (url) {
          axios
            .get(url)
            .then(result => {
              this.data = result.data
              resolve(result.data)
            })
            .catch(error => reject(error))
        } else {
          reject(new Error('InvalidURL'))
        }
      })
    }
  }
})
