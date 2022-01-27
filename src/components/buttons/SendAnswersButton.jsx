import React from 'react'
import PropTypes from 'prop-types'

function SendAnswersButton ({ sendButton }) {
  return (
    <button
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
