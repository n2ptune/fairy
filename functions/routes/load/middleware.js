const MAX_UNIQUE_ID_LENGTH = 20

const requireIDMiddleware = (req, res, next) => {
  const { id } = req.params

  if (!id) return res.status(400).end()
  if (id.length !== MAX_UNIQUE_ID_LENGTH) return res.status(400).end()

  next()
}

module.exports = {
  requireIDMiddleware
}
