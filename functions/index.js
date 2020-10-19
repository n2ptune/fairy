const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()

// Express middleware
if (process.env.NODE_ENV === 'development') {
  app.use(cors())
}

// Express Routes
const { load, rss, counsel } = require('./routes')

app.use('/load', load)
app.use('/rss', rss)
app.use('/counsel', counsel)

// All request endpoints start prefix /api
// /api/create
// /api/send ....
exports.api = functions.https.onRequest(app)
