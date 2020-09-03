const { db } = require('../firebase')

/**
 * Insert rss feed items to FireStore
 * @param {Array<Object>} feed
 * @param {String} id
 */
function insertFeed(feed, id) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('fairies')

    collection
      .where('id', '==', id)
      .get()
      .then(docs => {
        if (!docs.empty) {
          docs.forEach(doc => {
            doc.ref
              .update({
                rssData: feed
              })
              .then(() => resolve())
              .catch(error => reject(error))
          })
        } else {
          reject(new Error('아이디를 찾을 수 없음'))
        }
      })
  })
}

module.exports = insertFeed
