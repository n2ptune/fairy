const { db, functions } = require('../firebase')
const Axios = require('axios')
const axios = Axios.default.create({
  baseURL: functions.config().url.external
})

/**
 * Get RSS URL from FireStore with id
 * @param {String} id
 */
function getRSSURLWithID(id) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('fairies')

    collection
      .where('id', '==', id)
      .get()
      .then(docs => {
        if (!docs.empty) {
          docs.forEach(doc => resolve(doc.data().rssAddrWithPrefix))
        } else {
          reject(new Error('아이디를 찾을 수 없음'))
        }
      })
  })
}

/**
 * Parse RSS data with registered id to FireStore
 * @param {String} id
 */
function parseRSS(id) {
  return new Promise((resolve, reject) => {
    getRSSURLWithID(id)
      .then(rssAddr => {
        // Fetch rss feed data from external cloud function endpoints
        // Why? can't access external network other than internal services
        axios
          .get('/parse-rss?url=' + rssAddr)
          .then(feed => resolve(feed))
          .catch(rssError => console.error(rssError))
      })
      .catch(error => reject(error))
  })
}

module.exports = parseRSS
