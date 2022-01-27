import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import firebaseConfig from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const collectionName = 'feedbacks'

const collectionRef = collection(db, collectionName)

const insertFeedback = async (data) => {
  await addDoc(collectionRef, data)
}

export {
  insertFeedback
}
