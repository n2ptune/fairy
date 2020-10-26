import { db, arrayRemove } from '@/plugins/db'

function fetchMessage(id) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('fairies')

    collection
      .where('secretID', '==', id)
      .get()
      .then(qs => {
        if (!qs.empty) {
          const { messages } = qs.docs[0].data()
          resolve(messages)
        } else {
          reject(new Error('해당 아이디를 찾을 수 없음'))
        }
      })
      .catch(reject)
  })
}

function removeMessage(message, id) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('fairies')

    collection
      .where('secretID', '==', id)
      .get()
      .then(qs => {
        if (!qs.empty) {
          qs.docs[0].ref
            .update({
              messages: arrayRemove(message)
            })
            .then(resolve)
            .catch(error => reject(error))
        } else {
          reject(new Error('해당 아이디를 찾을 수 없음'))
        }
      })
      .catch(error => reject(error))
  })
}

export { fetchMessage, removeMessage }
