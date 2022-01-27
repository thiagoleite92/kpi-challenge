import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'

function FirstQuestion () {
  const { handleOptions } = useContext(MainContext)
  return (
    <>
      <h1>Primeira Pergunta</h1>
      <form className='first-question'>
        <h4>Quantas pessoas tem na equipe que você está?</h4>
        <label className='first-question-label'>
          <input type='radio' name='firstQuestion' value='1-3' onChange={handleOptions} />
          Entre 1 e 3
        </label>
        <label className='first-question-label'>
          <input type='radio' name='firstQuestion' value='4-6' onChange={handleOptions} />
          Entre 4 e 6
        </label>
        <label className='first-question-label'>
          <input type='radio' name='firstQuestion' value='7-9' onChange={handleOptions} />
          Entre 7 e 9
        </label>
        <label className='first-question-label'>
          <input type='radio' name='firstQuestion' value='10-14' onChange={handleOptions} />
          Entre 10 e 14
        </label>
        <label className='first-question-label'>
          <input type='radio' name='firstQuestion' value='15' onChange={handleOptions} />
          Mais de 15
        </label>
      </form>
    </>
  )
}

export default FirstQuestion
