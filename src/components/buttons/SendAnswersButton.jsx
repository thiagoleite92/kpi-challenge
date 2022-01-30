import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import MainContext from '../../context/MainContext'
import SendIcon from '@mui/icons-material/Send'
import { updateFirstQuestion, updateSecondQuestion } from '../../database/Api'

function SendAnswersButton ({ sendButton }) {
  const { answers } = useContext(MainContext)

  const saveAndSend = async (e) => {
    e.preventDefault()
    const { firstQuestion, secondQuestion } = answers
    await updateFirstQuestion(firstQuestion)
    await updateSecondQuestion(secondQuestion)
  }

  return (
    <button
      type='submit'
      onClick={(e) => saveAndSend(e)}
      disabled={sendButton}
      className='btn-send-answers'
    >
      Enviar
      <SendIcon />
    </button>
  )
}

SendAnswersButton.propTypes = {
  sendButton: PropTypes.bool
}.isRequired

export default SendAnswersButton
