import { db, serverTimestamp } from '@/plugins/db'
import uid from 'uid'
import axios from 'axios'

const MAX_UNIQUE_ID_LENGTH = 20

/**
 * @typedef {{
 * contents?: Array<object>,
 * siteAddr: String,
 * siteAddrWithPrefix?: String,
 * siteName: String,
 * themeColor: String,
 * isRSS?: String,
 * rssAddr?: String,
 * rssAddrWithPrefix?: String,
 * createdAt?: any,
 * id: String,
 * secretID: String,
 * success?: Boolean
 * }} Fairy
 */

/**
 * Create Fairy
 * @param {Fairy} fairy
 * @return {Promise<Fairy>}
 */
function createFairy(fairy) {
  return new Promise((resolve, reject) => {
    const currentDoc = db.collection('fairies').doc()
    const fairyID = uid(MAX_UNIQUE_ID_LENGTH)
    const fairySecretID = uid(MAX_UNIQUE_ID_LENGTH)

    // Fairy object extend
    fairy.id = fairyID
    fairy.secretID = fairySecretID
    fairy.createdAt = serverTimestamp
    fairy.siteAddrWithPrefix = 'https://' + fairy.siteAddr
    fairy.rssAddrWithPrefix = 'https://' + fairy.rssAddr
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
 * @param {Fairy} fairy
 * @return {Promise<Fairy>}
 */
function updateFairy(fairy, id, isEdit = false) {
  return new Promise((resolve, reject) => {
    const fairies = db.collection('fairies')

    fairies
      .where(isEdit ? 'secretID' : 'id', '==', id)
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
          const doc = q.docs[0]

          // Fairy object extend
          // fairy.createdAt = serverTimestamp
          fairy.updatedAt = serverTimestamp
          fairy.siteAddrWithPrefix = 'https://' + fairy.siteAddr
          fairy.rssAddrWithPrefix = 'https://' + fairy.rssAddr
          fairy.success = true

          doc.ref.update(fairy).then(() => {
            doc.ref
              .get()
              .then(updatedFairy => resolve(updatedFairy.data()))
              .catch(error => reject(error))
          })
        }
      })
  })
}

/**
 * 최종 등록 'success' 필드 false -> true
 * @param {String} id
 */
function accpetFairy(id) {
  return new Promise((resolve, reject) => {
    const fairies = db.collection('fairies')

    fairies
      .where('id', '==', id)
      .get()
      .then(qs => {
        if (!qs.empty) {
          const doc = qs.docs[0]

          doc.ref
            .update({ success: true })
            .then(resolve)
            .catch(error => reject(error))

          const { isRSS, id } = doc.data()

          if (isRSS) {
            axios
              .get(`${process.env.VUE_APP_SERVER_URL}/rss/parse/${id}`)
              .catch(error => console.error(error))
          }
        } else {
          reject({
            title: '데이터를 찾을 수 없음',
            message: `${id}는 유효한 아이디 값이 아닙니다.`
          })
        }
      })
  })
}

function generateCode(id) {
  const url = process.env.VUE_APP_DEPLOY_APP_URL

  const code = `<script
    src="${url}"
    defer
    data-fairy-client-id="${id}"
    data-fairy-client-app
  ></script>`.trim()

  return code
}

export { createFairy, updateFairy, accpetFairy, generateCode }
