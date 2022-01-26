import React, { useState } from 'react'
import MapQuestions from './MapQuestions'
import './questions.css'

function Questions () {
  const [questionPosition, setQuestPosition] = useState(0)
  console.log(setQuestPosition)
  return (
    <main className='questions-container'>
      <MapQuestions questionPosition={questionPosition} />
      <button onClick={() => setQuestPosition(questionPosition + 1)}>Proxima</button>
      <button onClick={() => setQuestPosition(questionPosition - 1)}>Anterior</button>
    </main>
  )
}

export default Questions
