import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../context/MainContext'
import SendAnswersButton from '../buttons/SendAnswersButton'
import MapQuestions from './MapQuestions'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import './questions.css'

function Questions () {
  const [questionPosition, setQuestPosition] = useState(0)
  const [sendButton, setSendButton] = useState(true)
  const { answers, setAnswers } = useContext(MainContext)

  useEffect(() => {
    const handleSendButton = () => {
      if (answers.firstQuestion !== '' && answers.secondQuestion !== '') {
        return setSendButton(false)
      }
      return setSendButton(true)
    }
    handleSendButton()
  }, [answers.firstQuestion, answers.secondQuestion])

  return (
    <main className='questions-container'>
      <MapQuestions questionPosition={questionPosition} />
      <button
        className='btn-reset'
        style={{ marginTop: '10px' }}
        onClick={() => setAnswers({ firstQuestion: '', secondQuestion: '' })}
      >
        <RestartAltIcon />
        Recomeçar
      </button>
      <div className='btn-question-container'>
        <button
          className='btn-prev-question'
          disabled={questionPosition === 0}
          onClick={() => setQuestPosition(questionPosition - 1)}
        >
          <ArrowBackIosIcon />
          Anterior
        </button>
        <SendAnswersButton sendButton={sendButton} />
        <button
          disabled={questionPosition === 1}
          onClick={() => setQuestPosition(questionPosition + 1)}
          className='btn-next-question'
        >
          Próxima
          <ArrowForwardIosIcon />
        </button>
      </div>
    </main>
  )
}

export default Questions
