const { Router } = require('express')
const router = Router()
const { requireIDMiddleware } = require('../middleware')
const { parse, insert } = require('../../lib/rss')

router.get('/parse/:id', requireIDMiddleware, async (req, res) => {
  const { id } = req.params

  try {
    const feed = await parse(id)
    await insert(feed, id)

    res.set('Content-Type', 'application/json')

    return res.status(200).send(feed)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
})

module.exports = router
