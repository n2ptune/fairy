const { db } = require('../firebase')
const collection = db.collection('fairies')

function loadFairyData(id) {
  if (!id) return

  return new Promise((resolve, reject) => {
    collection
      .where('id', '==', id)
      .where('success', '==', true)
      .get()
      .then(docs => {
        if (docs.empty) {
          reject(new Error('NotFoundFairy'))
        } else {
          docs.forEach(doc => {
            const fairy = doc.data()

            // 콘텐츠, 비공개 키 제거
            delete fairy.contents
            delete fairy.secretID

            resolve(fairy)
          })
        }
      })
      .catch(error => reject(error))
  })
}

function loadFairyContents(id) {
  if (!id) return

  return new Promise((resolve, reject) => {
    collection
      .where('id', '==', id)
      .get()
      .then(docs => {
        if (docs.empty) {
          reject(new Error('NotFoundFairy'))
        } else {
          docs.forEach(doc => {
            const data = doc.data()

            if (data.success) {
              const result = {
                contents: data.contents,
                cors: data.siteAddrWithPrefix
              }

              resolve(result)
            } else {
              reject(new Error('NotAcceptFairy'))
            }
          })
        }
      })
  })
}

module.exports = {
  loadFairyData,
  loadFairyContents
}
