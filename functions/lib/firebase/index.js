const admin = require('firebase-admin')
let account

if (process.env.NODE_ENV === 'development') {
  account = require('../../secret/fairy-web-service-firebase-adminsdk-e5mi5-dfa35325f8.json')
}

const app = admin.initializeApp({
  credential: account
    ? admin.credential.cert(account)
    : admin.credential.applicationDefault(),
  databaseURL: 'https://fairy-web-service.firebaseio.com'
})

module.exports = {
  app,
  db: app.firestore()
}
