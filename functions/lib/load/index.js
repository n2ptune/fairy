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
          docs.forEach(doc => {
            const fairy = doc.data()

            // 콘텐츠 부분을 없애고 전송
            delete fairy.contents
            resolve(fairy)
          })
        }
      })
      .catch(error => reject(error))
  })
}

function loadFairyContents(id) {}

module.exports = {
  loadFairyData
}
