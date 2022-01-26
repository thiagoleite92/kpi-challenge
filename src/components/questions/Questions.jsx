import React, { useState } from 'react'
import MapQuestions from './MapQuestions'
import './questions.css'

function Questions () {
  const [questionPosition, setQuestPosition] = useState(0)
  return (
    <main className='questions-container'>
      <MapQuestions questionPosition={questionPosition} />
      <div className='btn-question-container'>
        <button onClick={() => setQuestPosition(questionPosition - 1)}>Anterior</button>
        <button onClick={() => setQuestPosition(questionPosition + 1)}>Proxima</button>
      </div>
    </main>
  )
}

export default Questions
