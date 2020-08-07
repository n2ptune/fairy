const { db } = require('../firebase')

function loadFairyData(id) {
  if (!id) return

  return new Promise((resolve, reject) => {
    const collection = db.collection('fairies')

    collection
      .where('id', '==', id)
      .get()
      .then(docs => {
        if (docs.empty) {
          reject(new Error('NotFoundFairy'))
        } else {
          docs.forEach(doc => resolve(doc.data()))
        }
      })
      .catch(error => reject(error))
  })
}

module.exports = {
  loadFairyData
}
