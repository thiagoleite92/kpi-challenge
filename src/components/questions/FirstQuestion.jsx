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
            value='a'
            onChange={handleOptions}
            checked={firstQuestion === 'a'}
          />
          Entre 1 e 3
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='b'
            onChange={handleOptions}
            checked={firstQuestion === 'b'}
          />
          Entre 4 e 6
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='c'
            onChange={handleOptions}
            checked={firstQuestion === 'c'}
          />
          Entre 7 e 9
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='d'
            onChange={handleOptions}
            checked={firstQuestion === 'd'}
          />
          Entre 10 e 14
        </label>
        <label className='first-question-label'>
          <input
            type='radio'
            name='firstQuestion'
            value='e'
            onChange={handleOptions}
            checked={firstQuestion === 'e'}
          />
          Mais de 15
        </label>
      </form>
    </>
  )
}

export default FirstQuestion
