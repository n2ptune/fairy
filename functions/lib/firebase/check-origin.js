const { db } = require('./')

/**
 * @param {string} fairyID
 * @param {string} hostname
 */
exports.checkOrigin = async function (fairyID) {
  const collection = db.collection('fairies')

  const querySnapshot = await collection.where('id', '==', fairyID).get()

  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data().siteAddrWithPrefix
  } else {
    throw new Error('Not Found Fairy')
  }
}
