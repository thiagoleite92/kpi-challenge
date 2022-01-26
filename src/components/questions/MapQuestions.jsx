import React, { useState, useEffect } from 'react'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'

// eslint-disable-next-line react/prop-types
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

export default MapQuestions
