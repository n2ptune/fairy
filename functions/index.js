const functions = require('firebase-functions')
const express = require('express')

const app = express()

// Express middleware
// ...

// Express Routes
// ...

// All request endpoints start prefix /api
// /api/create
// /api/send ....
exports.api = functions.https.onRequest(app)
