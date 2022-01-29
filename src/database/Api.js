import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import firebaseConfig from './firebaseConfig'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const first = 'firstQuestion'
const second = 'secondQuestion'

const firstRef = collection(db, first)
const secondRef = collection(db, second)

const getFirstCollection = async () => {
  const data = await getDocs(firstRef)
  return data
}

const getSecondCollection = async () => {
  const data = await getDocs(secondRef)
  return data
}

const updateFirstQuestion = async (key) => {
  const response = await getFirstCollection()
  const documents = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

  const { id, quantity } = documents.find(({ value }) => value === key)

  const testeDoc = doc(db, first, id)
  const newQuantity = { quantity: quantity + 1 }
  await updateDoc(testeDoc, newQuantity)
}

const updateSecondQuestion = async (key) => {
  const response = await getSecondCollection()
  const documents = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

  const { id, quantity } = documents.find(({ value }) => value === key)

  const testeDoc = doc(db, second, id)
  const newQuantity = { quantity: quantity + 1 }
  await updateDoc(testeDoc, newQuantity)
}

export {
  updateFirstQuestion,
  updateSecondQuestion,
  getFirstCollection,
  getSecondCollection
}
