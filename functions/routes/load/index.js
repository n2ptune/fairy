const { Router } = require('express')
const router = Router()
const { loadFairyData } = require('../../lib/load')

router.get('/:id', (req, res) => {
  const { id } = req.params

  if (!id) return res.status(400).end()

  loadFairyData(id)
    .then(fairy => {
      if (process.env.NODE_ENV === 'production') {
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

module.exports = router
