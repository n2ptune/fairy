const { db } = require('../firebase')
const Parser = require('rss-parser')
const parser = new Parser()

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
          docs.forEach(doc => resolve(doc.data().rssAddr))
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
        // parser
        //   .parseURL(rssAddr)
        //   .then(feed => resolve(feed))
        //   .catch(error => reject(error))
        // Fetch rss feed data from external cloud function endpoints
        // Why? can't access external network other than internal services
        // URL: https://asia-northeast3-tonal-apex-262514.cloudfunctions.net/parse-rss
      })
      .catch(error => reject(error))
  })
}

module.exports = parseRSS
