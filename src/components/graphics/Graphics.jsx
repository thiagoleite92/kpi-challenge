import React, { useEffect, useState } from 'react'
import enumerateComponents from '../../utils/componentsPosition'
import FirstQuestionResult from './FirstQuestionResult'
import SecondQuestionResult from './SecondQuestionResult'
import './graphics.css'

function Graphics () {
  const [graphics, setGraphics] = useState([])
  const [graphicPosition, setGraphicPosition] = useState(0)

  useEffect(() => {
    enumerateComponents(setGraphics, <FirstQuestionResult />, <SecondQuestionResult />)
  }, [])

  return (
    <main className='graphic-container'>
      {
        graphics[graphicPosition]
      }
      <div className='btn-graphic-container'>
        <button
          type='button'
          className='btn-prev-graphic'
          disabled={graphicPosition === 0}
          onClick={() => setGraphicPosition(graphicPosition - 1)}
        >
          Anterior
        </button>
        <button
          type='button'
          disabled={graphicPosition === 1}
          onClick={() => setGraphicPosition(graphicPosition + 1)}
          className='btn-next-graphic'
        >
          Proxima
        </button>
      </div>
    </main>
  )
}

export default Graphics
