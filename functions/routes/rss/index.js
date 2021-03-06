const { Router } = require('express')
const router = Router()
const { requireIDMiddleware } = require('../middleware')
const { parse, insert } = require('../../lib/rss')

router.get('/parse/:id', requireIDMiddleware, async (req, res) => {
  const { id } = req.params

  try {
    const feed = await parse(id)
    await insert(feed.data, id)

    return res.status(200).end()
  } catch (error) {
    return res.status(500).send(error)
  }
})

module.exports = router
