// eslint-disable-next-line
import { db, serverTimestamp } from '@/plugins/db'
import uid from 'uid'

const MAX_UNIQUE_ID_LENGTH = 20

/**
 * Create Fairy
 * @param {{
 * contents?: Array<object>,
 * siteAddr: String,
 * siteName: String,
 * themeColor: String,
 * isRSS?: String,
 * rssAddr?: String
 * }} fairy
 */
function createFairy(fairy) {
  return new Promise((resolve, reject) => {
    const currentDoc = db.collection('fairies').doc()
    const fairyID = uid(MAX_UNIQUE_ID_LENGTH)

    // Fairy object extend
    fairy.id = fairyID
    fairy.createdAt = serverTimestamp
    fairy.siteAddrWithPrefix = 'https://' + fairy.siteAddr
    fairy.success = false

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

/**
 * Update Fairy
 * @param {{
 * contents?: Array<object>,
 * siteAddr: String,
 * siteName: String,
 * themeColor: String,
 * isRSS?: String,
 * rssAddr?: String
 * }} fairy
 */
function updateFairy(fairy, id) {
  return new Promise((resolve, reject) => {
    const fairies = db.collection('fairies')

    fairies
      .where('id', '==', id)
      .get()
      .then(q => {
        if (q.empty) {
          reject({
            title: '데이터를 찾을 수 없음',
            message: '업데이트할 데이터를 찾지 못했습니다.'
          })
        } else if (q.size > 1) {
          reject({
            title: '데이터 중복 발생',
            message: '데이터가 중복되었습니다.'
          })
        } else {
          q.forEach(doc => {
            const docID = doc.id

            // Fairy object extend
            fairy.createdAt = serverTimestamp
            fairy.siteAddrWithPrefix = 'https://' + fairy.siteAddr
            fairy.success = false

            fairies
              .doc(docID)
              .update(fairy)
              .then(() => {
                fairies
                  .doc(docID)
                  .get()
                  .then(updatedFairy => resolve(updatedFairy.data()))
                  .catch(error => reject(error))
              })
          })
        }
      })
  })
}

/**
 * 최종 등록 'success' 필드 false -> true
 *
 * @param {String} id
 */
function accpetFairy(id) {
  return new Promise((resolve, reject) => {
    const fairies = db.collection('fairies')

    fairies
      .where('id', '==', id)
      .get()
      .then(docs => {
        if (docs.empty) {
          reject({
            title: '데이터를 찾을 수 없음',
            message: `${id}는 유효한 아이디 값이 아닙니다.`
          })
        } else {
          docs.forEach(doc =>
            doc.ref
              .update({ success: true })
              .then(resolve)
              .catch(error => reject(error))
          )
        }
      })
  })
}

function generateCode(id) {
  /* eslint no-useless-escape: "off" */
  const url = 'http://localhost:5000/dist/fairy.app.js'

  const code = `
<script>
  var url = '${url}';

  window.FAIRY_APP = {
    id: ${id}
  };

  (function(t, i) {
    if (t.getElementById(i)) return;

    var fs = t.createElement('script')
    var ta = t.getElementsByTagName('script')[0]
    fs.async = true
    fs.src = url
    ta.parentNode.insertBefore(fs, ta)
  })(document, 'fairy-app-inject')
<\/script>`.trim()

  return code
}

export { createFairy, updateFairy, accpetFairy, generateCode }
