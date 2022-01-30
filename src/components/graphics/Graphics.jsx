import React, { useEffect, useState } from 'react'
import enumerateComponents from '../../utils/componentsPosition'
import FirstQuestionResult from './FirstQuestionResult'
import SecondQuestionResult from './SecondQuestionResult'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import './graphics.css'
import Header from '../../components/header/Header'

function Graphics () {
  const [graphics, setGraphics] = useState([])
  const [graphicPosition, setGraphicPosition] = useState(0)

  useEffect(() => {
    enumerateComponents(setGraphics, <FirstQuestionResult />, <SecondQuestionResult />)
  }, [])

  return (
    <>
      <Header />
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
            <ArrowBackIosIcon />
            Anterior
          </button>
          <button
            type='button'
            disabled={graphicPosition === 1}
            onClick={() => setGraphicPosition(graphicPosition + 1)}
            className='btn-next-graphic'
          >
            Próximo
            <ArrowForwardIosIcon />
          </button>
        </div>
      </main>
    </>
  )
}

export default Graphics
