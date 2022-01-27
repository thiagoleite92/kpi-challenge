import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const addAnswer = async () => {
  await db.collection('answers').doc()
}

export {
  addAnswer
}
