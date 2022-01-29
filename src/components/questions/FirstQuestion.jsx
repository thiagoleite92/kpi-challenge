import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'

function FirstQuestion () {
  const { handleOptions, answers: { firstQuestion } } = useContext(MainContext)
  return (
    <>
      <h1>Primeira Pergunta</h1>
      <form className='first-question'>
        <h4>Quantas pessoas tem na equipe que você está?</h4>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='1-3'
            onChange={handleOptions}
            checked={firstQuestion === '1-3'}
          />
          Entre 1 e 3
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='4-6'
            onChange={handleOptions}
            checked={firstQuestion === '4-6'}
          />
          Entre 4 e 6
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='7-9'
            onChange={handleOptions}
            checked={firstQuestion === '7-9'}
          />
          Entre 7 e 9
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='10-14'
            onChange={handleOptions}
            checked={firstQuestion === '10-14'}
          />
          Entre 10 e 14
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='15 ou mais'
            onChange={handleOptions}
            checked={firstQuestion === '15 ou mais'}
          />
          Mais de 15
        </label>
      </form>
    </>
  )
}

export default FirstQuestion
