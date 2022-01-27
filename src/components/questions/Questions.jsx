import React, { useState } from 'react'
import MapQuestions from './MapQuestions'
import './questions.css'

function Questions () {
  const [questionPosition, setQuestPosition] = useState(0)
  const [sendButton, setSendButton] = useState(true)

  return (
    <main className='questions-container'>
      <MapQuestions questionPosition={questionPosition} />
      <div className='btn-question-container'>
        <button
          className='btn-prev-question'
          disabled={questionPosition === 0}
          onClick={() => setQuestPosition(questionPosition - 1)}
        >
          Anterior
        </button>
        <button
          className='btn-send-answers'
        >
          Salvar e enviar
        </button>
        <button
          disabled={questionPosition === 1}
          onClick={() => setQuestPosition(questionPosition + 1)}
          className='btn-next-question'
        >
          Proxima
        </button>
      </div>
    </main>
  )
}

export default Questions
