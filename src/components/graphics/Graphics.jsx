import React, { useEffect, useState } from 'react'
import enumerateComponents from '../../utils/componentsPosition'
import FirstQuestionResult from './FirstQuestionResult'
import SecondQuestionResult from './SecondQuestionResult'

function Graphics () {
  const [graphics, setGraphics] = useState([])
  const [graphicPosition, setGraphicPosition] = useState(0)
  console.log(graphicPosition)

  useEffect(() => {
    enumerateComponents(setGraphics, <FirstQuestionResult />, <SecondQuestionResult />)
  }, [])

  return (
    <main className='graphic-main-container'>
      {
        graphics[graphicPosition]
      }
      <div className='btn-graphics-container'>
        <button
          type='button'
          className='btn-prev-question'
          disabled={graphicPosition === 0}
          onClick={() => setGraphicPosition(graphicPosition - 1)}
        >
          Anterior
        </button>
        <button
          type='button'
          disabled={graphicPosition === 1}
          onClick={() => setGraphicPosition(graphicPosition + 1)}
          className='btn-next-question'
        >
          Proxima
        </button>
      </div>
    </main>
  )
}

export default Graphics
