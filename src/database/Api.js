import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import firebaseConfig from './firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const first = 'firstQuestion'
const second = 'secondQuestion'

const firstRef = collection(db, first)
const secondRef = collection(db, second)

const feedbackFirstQuestion = async ({ firstQuestion }) => {
  await addDoc(firstRef, { firstQuestion })
}

const feedbackSecondQuestion = async ({ secondQuestion }) => {
  await addDoc(secondRef, { secondQuestion })
}

const getFeedbacks = async () => {
  const data = await getDocs(firstRef)
  return data
}

export {
  feedbackFirstQuestion,
  feedbackSecondQuestion,
  getFeedbacks
}
