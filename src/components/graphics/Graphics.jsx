import React, { useEffect, useState } from 'react'
import FirstQuestionResult from './FirstQuestionResult'
import SecondQuestionResult from './SecondQuestionResult'

function Graphics () {
  const [graphics, setGraphics] = useState([])
  const [graphicPosition, setGraphicPosition] = useState(0)

  useEffect(() => {
    const renderGraphics = (...graphics) => {
      const enumerateGraphics = graphics
      setGraphics(enumerateGraphics)
    }
    renderGraphics(<FirstQuestionResult />, <SecondQuestionResult />)
  })

  return (
    <main className='graphic-main-container'>
      {
        graphics[graphicPosition]
      }
      <button
        className='btn-prev-question'
        disabled={graphicPosition === 0}
        onClick={() => setGraphicPosition(graphicPosition - 1)}
      >
        Anterior
      </button>
      <button
        disabled={graphicPosition === 1}
        onClick={() => setGraphicPosition(graphicPosition + 1)}
        className='btn-next-question'
      >
        Proxima
      </button>
    </main>
  )
}

export default Graphics
