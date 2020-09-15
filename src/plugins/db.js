let firebase
let db
let serverTimestamp

// 개발 환경
if (process.env.NODE_ENV === 'development') {
  const firebaseApp = require('firebase/app')
  require('firebase/firestore')

  firebase = firebaseApp.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
  })

  db = firebaseApp.firestore()
  serverTimestamp = firebaseApp.firestore.FieldValue.serverTimestamp()
} else if (process.env.NODE_ENV === 'production') {
  firebase = window.firebase || null
  db = firebase.firestore() || null
  serverTimestamp =
    window.firebase.firestore.FieldValue.serverTimestamp() || null

  if (!firebase && !db && !serverTimestamp) {
    console.error('Not initialize firebase app')
  }
}

export { firebase, db, serverTimestamp }
