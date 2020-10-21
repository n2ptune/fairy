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
    try {
      res.set('Access-Control-Allow-Origin', await checkOrigin(body.id))
    } catch (error) {
      return res.status(400).send(error)
    }
  } else {
    // development mode
    const origin = req.get('Origin')

    res.set('Access-Control-Allow-Origin', origin)
  }

  try {
    await pushCounselMessage(body)
    return res.status(200).end()
  } catch (error) {
    return res.status(500).send(error)
  }
})

module.exports = router
