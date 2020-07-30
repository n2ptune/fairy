import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyA9CYvJsRvQshwxCclNgTS6j46zGrw2cws',
    authDomain: 'fairy-web-service.firebaseapp.com',
    databaseURL: 'https://fairy-web-service.firebaseio.com',
    projectId: 'fairy-web-service',
    storageBucket: 'fairy-web-service.appspot.com',
    messagingSenderId: '579939145788',
    appId: '1:579939145788:web:22fa84485a8e44ccd00b39',
    measurementId: 'G-7PTSRP2242'
  })
  .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()

db.settings({})
