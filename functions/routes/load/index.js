const { Router } = require('express')
const router = Router()
const { loadFairyData } = require('../../lib/load')
const { requireIDMiddleware } = require('./middleware')

router.get('/:id', requireIDMiddleware, (req, res) => {
  const { id } = req.params

  loadFairyData(id)
    .then(fairy => {
      if (process.env.NODE_ENV === 'production') {
        // Fairy에 등록되어 있지 않은 출처에서 요청시
        // CORS 발생
        res.set('Access-Control-Allow-Origin', fairy.siteAddrWithPrefix)
      }
      res.append('Content-Type', 'application/json; charset=utf-8')
      res.append('Vary', 'Origin')

      return res.status(200).send(fairy)
    })
    .catch(error => {
      let status

      if (error.message === 'NotFoundFairy') {
        status = 404
      } else {
        status = 500
      }

      return res.status(status).end()
    })
})

router.get('/contents/:id', requireIDMiddleware, (req, res) => {
  const { id } = req.params
})

module.exports = router
