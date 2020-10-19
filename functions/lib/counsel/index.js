const { db, admin } = require('../firebase')

/**
 * @typedef {object} Counsel
 * @property {string} message
 * @property {string} id
 * @property {string=} userName
 * @property {string=} userEmail
 */

/**
 * @param {Counsel} counsel
 * @returns {Promise<void>}
 */
function pushCounselMessage(counsel) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('fairies')

    collection
      .where('id', '==', counsel.id)
      .get()
      .then(qs => {
        if (!qs.empty) {
          const fairy = qs.docs[0].data()

          if (!fairy.messages) {
            qs.docs[0].ref
              .set(
                {
                  messages: admin.firestore.FieldValue.arrayUnion({
                    userName: counsel.userName || '',
                    userEmail: counsel.userEmail || '',
                    body: counsel.message,
                    ts: admin.firestore.Timestamp.now()
                  })
                },
                { merge: true }
              )
              .then(resolve)
          } else {
            qs.docs[0].ref
              .update({
                messages: admin.firestore.FieldValue.arrayUnion({
                  userName: counsel.userName || '',
                  userEmail: counsel.userEmail || '',
                  body: counsel.message,
                  ts: admin.firestore.Timestamp.now()
                })
              })
              .then(resolve)
          }
        } else {
          reject(new Error('No Data'))
        }
      })
      .catch(reject)
  })
}

module.exports = {
  pushCounselMessage
}
