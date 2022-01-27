import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'

function SecondQuestion () {
  const { handleOptions, answers: { secondQuestion } } = useContext(MainContext)

  const renderOptions = (value) => {
    return (
      <label
        className='second-question-label'
      >
        <input
          type='radio'
          name='secondQuestion'
          value={value}
          onChange={handleOptions}
          className='second-input-option'
          checked={secondQuestion === value.toString()}
        />
        <br />
        {value}
      </label>
    )
  }

  return (
    <>
      <h1>Segunda pergunta</h1>
      <form className='second-question'>
        <h3 style={{ marginRight: '20px' }}>
          Qual seu nível de satisfação com a empresa? <br /><br /> Sendo 1 pouco satisfeito, e 10 muito satisfeito.
        </h3>
        {renderOptions(1)}
        {renderOptions(2)}
        {renderOptions(3)}
        {renderOptions(4)}
        {renderOptions(5)}
        {renderOptions(6)}
        {renderOptions(7)}
        {renderOptions(8)}
        {renderOptions(9)}
        {renderOptions(10)}
      </form>
    </>
  )
}

export default SecondQuestion
