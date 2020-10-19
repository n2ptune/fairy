const { Router } = require('express')
const router = Router()
const { pushCounselMessage } = require('../../lib/counsel')
const { requireIDMiddleware } = require('../middleware')
const { checkOrigin } = require('../../lib/firebase/check-origin')

router.post('/write', requireIDMiddleware, async (req, res) => {
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

  if (!body.message) {
    return res.status(400).end()
  }

  if (process.env.NODE_ENV === 'production') {
    // if (process.env.NODE_ENV) {
    const isMatchOrigin = await checkOrigin(body.id, req.hostname)

    if (!isMatchOrigin || isMatchOrigin instanceof Error) {
      return res.status(400).send({
        message: isMatchOrigin.message || 'No Match Origin'
      })
    } else {
      res.set('Access-Control-Allow-Origin', req.hostname)
      res.set('Accept', 'application/json')
      res.set('Content-Type', 'application/json')
    }
  }

  try {
    await pushCounselMessage(body)
    return res.status(200).end()
  } catch (error) {
    return res.status(500).send(error)
  }
})

module.exports = router
