import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import MainContext from '../../context/MainContext'
import db from '../../database/Api'
import { collection, addDoc } from 'firebase/firestore'

function SendAnswersButton ({ sendButton }) {
  const { headerInfo, answers } = useContext(MainContext)
  const answersCollectionRef = collection(db, 'answers')

  const saveAndSend = async (e) => {
    e.preventDefault()
    console.log(answers, headerInfo)
    await addDoc(answersCollectionRef, answers)
  }

  return (
    <button
      type='submit'
      onClick={(e) => saveAndSend(e)}
      disabled={sendButton}
      className='btn-send-answers'
    >
      Salvar e enviar
    </button>
  )
}

SendAnswersButton.propTypes = {
  sendButton: PropTypes.bool
}.isRequired

export default SendAnswersButton
