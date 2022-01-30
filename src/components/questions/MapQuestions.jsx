import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import enumerateComponents from '../../utils/componentsPosition'

function MapQuestions ({ questionPosition }) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    enumerateComponents(setQuestions, <FirstQuestion />, <SecondQuestion />)
  }, [])

  return (
    <>
      {
        questions[questionPosition]
      }
    </>
  )
}

MapQuestions.propTypes = {
  questionPosition: PropTypes.number
}.isRequired

export default MapQuestions
