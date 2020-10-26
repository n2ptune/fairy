import { db } from '@/plugins/db.js'

function checkID(id) {
  if (!id || id.length !== 20) {
    return false
  }
  return true
}

function getFairyDataFromID(id) {
  return new Promise((resolve, reject) => {
    if (!checkID(id)) {
      reject(new Error('아이디 값이 유효하지 않음'))
    } else {
      const collection = db.collection('fairies')

      collection
        .where('secretID', '==', id)
        .get()
        .then(qs => {
          if (!qs.empty) {
            resolve(qs.docs[0].data())
          } else {
            reject(new Error('아이디를 찾을 수 없음'))
          }
        })
        .catch(error => reject(error))
    }
  })
}

export { getFairyDataFromID }
