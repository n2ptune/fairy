const MAX_UNIQUE_ID_LENGTH = 20

const requireIDMiddleware = (req, res, next) => {
  let id

  console.log(req.body)

  if (req.method === 'GET') {
    id = req.params.id
  } else if (req.method === 'POST') {
    id = req.body.id || JSON.parse(req.body).id
  }

  if (!id) return res.status(400).end()
  if (id.length !== MAX_UNIQUE_ID_LENGTH) return res.status(400).end()

  next()
}

module.exports = {
  requireIDMiddleware
}
