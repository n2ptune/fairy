const { db } = require('./')

/**
 * @param {string} fairyID
 * @param {string} hostname
 */
exports.checkOrigin = async function (fairyID, hostname) {
  const collection = db.collection('fairies')

  try {
    const querySnapshot = await collection.where('id', '==', fairyID).get()

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data().siteAddr === hostname
    } else {
      throw new Error('Not Found Fairy')
    }
  } catch (error) {
    return error
  }
}