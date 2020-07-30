// eslint-disable-next-line
import { db, serverTimestamp } from '@/plugins/db'
import uid from 'uid'

const MAX_UNIQUE_ID_LENGTH = 20

/**
 * Create Fairy
 * @param {{
 * contents: Array<object>,
 * siteAddr: String,
 * siteName: String,
 * themeColor: String
 * }} fairy
 */
function createFairy(fairy) {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    const currentDoc = db.collection('fairies').doc()
    const fairyID = uid(MAX_UNIQUE_ID_LENGTH)

    fairy.id = fairyID
    fairy.createdAt = serverTimestamp
    fairy.siteAddrWithPrefix = 'https://' + fairy.siteAddr

    // 검증
    db.collection('fairies')
      .where('siteAddr', '==', fairy.siteAddr)
      .get()
      .then(qs => {
        if (qs.empty) {
          currentDoc
            .set(fairy)
            .then(() =>
              currentDoc.get().then(doc => {
                if (doc.exists) {
                  resolve(doc.data())
                } else {
                  reject({
                    title: '데이터를 찾을 수 없음',
                    message: '다시 시도해주세요.'
                  })
                }
              })
            )
            .catch(error => reject(error))
        } else {
          reject({
            title: '이미 존재하는 사이트 주소',
            message: '입력한 사이트 주소가 이미 존재합니다.'
          })
        }
      })
  })
}

export default createFairy
