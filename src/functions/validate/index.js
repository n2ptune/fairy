const siteNameRule = [
  {
    max: 20,
    min: 1,
    message: '사이트 이름은 최소 1글자 최대 20글자 이하여야 합니다.',
    trigger: 'blur'
  },
  {
    required: true,
    message: '사이트 이름은 반드시 입력해야 합니다.',
    trigger: 'blur'
  }
]

const siteAddrRule = [
  {
    required: true,
    message: '사이트 주소는 반드시 입력해야 합니다.',
    trigger: 'blur'
  },
  {
    /**
     * @param {Object} r
     * @param {String} v
     * @param {Function} cb
     */
    validator: (r, v, cb) => {
      const reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gm
      const url = 'https://' + v
      const isURL = reg.test(url)

      if (isURL) {
        if (url.includes('?') || url.includes('&')) {
          cb(new Error('사이트 주소에 "?"나 "&"를 포함시킬 수 없습니다.'))
        } else {
          cb()
        }
      } else {
        cb(new Error('유효한 사이트 주소가 아닙니다.'))
      }
    }
  },
  {
    /**
     * @param {Object} r
     * @param {String} v
     * @param {Function} cb
     */
    validator: (r, v, cb) => {
      const reg = /^(www.)/

      if (reg.test(v)) {
        cb(new Error('사이트 주소 앞에 www가 붙지 않아도 됩니다.'))
      } else {
        cb()
      }
    }
  }
]

const rssAddrRule = []

siteAddrRule.map(val => rssAddrRule.push(Object.assign({}, val)))

/**
 * @return {{status: String, title?: String, message?: String}}
 */
function validateContent({
  siteAddr,
  siteName,
  themeColor,
  isRSS,
  rssAddr,
  contents
}) {
  if (isRSS) {
    if (!rssAddr) {
      return {
        status: 'Error',
        title: 'RSS URL 누락',
        message: 'RSS를 표시하게끔 하려면 참조할 URL을 입력해야 합니다.'
      }
    }
  } else {
    if (!siteAddr || !siteName || !themeColor) {
      return {
        status: 'Error',
        title: '필수 요소 누락',
        message: '사이트 주소와 이름 그리고 테마 색은 반드시 지정되어야 합니다.'
      }
    }
    const checkAllContents = content =>
      content.title.length >= 5 && content.body.length >= 10

    if (!contents.every(checkAllContents)) {
      return {
        status: 'Error',
        title: '컨텐츠 제목과 내용의 길이 부적절',
        message: '컨텐츠 제목은 5자 이상 내용은 10자 이상이 포함되어야 합니다.'
      }
    }
  }

  return {
    status: 'success'
  }
}

export { siteNameRule, siteAddrRule, rssAddrRule }
export { validateContent }
