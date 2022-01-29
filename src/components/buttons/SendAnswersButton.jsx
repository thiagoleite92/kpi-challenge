import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import MainContext from '../../context/MainContext'
import { updateFirstQuestion } from '../../database/Api'

function SendAnswersButton ({ sendButton }) {
  const { answers } = useContext(MainContext)

  const saveAndSend = async (e) => {
    e.preventDefault()
    const { firstQuestion } = answers
    console.log(firstQuestion)
    await updateFirstQuestion(firstQuestion)
  }

  return (
    <button
      type='submit'
      onClick={(e) => saveAndSend(e)}
      disabled={sendButton}
      className='btn-send-answers'
    >
      Salvar e Enviar
    </button>
  )
}

SendAnswersButton.propTypes = {
  sendButton: PropTypes.bool
}.isRequired

export default SendAnswersButton
