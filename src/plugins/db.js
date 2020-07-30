import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
  })
  .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

db.settings({})
