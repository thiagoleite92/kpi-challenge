import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'

function MapQuestions ({ questionPosition }) {
  console.log(questionPosition)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const renderQuestions = (...questions) => {
      const enumeRateQuestions = questions
      setQuestions(enumeRateQuestions)
    }
    renderQuestions(
      <FirstQuestion />,
      <SecondQuestion />
    )
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
