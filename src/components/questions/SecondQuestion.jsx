import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'

function SecondQuestion () {
  const { setAnswers } = useContext(MainContext)

  const handleOptions = ({ target: { name, value } }) => {
    setAnswers((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }
  const renderOptions = (value) => {
    return (
      <label>
        <input type='radio' name='secondQuestion' value={value} onChange={handleOptions} />
        {value}
      </label>
    )
  }

  return (
    <>
      <h1>Segunda pergunta</h1>
      <form className='second-question'>
        <h4>Qual seu nível de satisfação com a empresa?</h4>
        <label>
          <input type='radio' name='secondQuestion' value={1} onChange={handleOptions} />
          1 - Pouco Satisfeito
        </label>
        {renderOptions(2)}
        {renderOptions(3)}
        {renderOptions(4)}
        {renderOptions(5)}
        {renderOptions(6)}
        {renderOptions(7)}
        {renderOptions(8)}
        {renderOptions(9)}
        <label>
          <input type='radio' name='secondQuestion' value={10} onChange={handleOptions} />
          10 - Muito Satisfeito
        </label>
      </form>
    </>
  )
}

export default SecondQuestion
