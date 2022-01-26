import React from 'react'

function FirstQuestion () {
  return (
    <>
      Primeira Pergunta
      <form className='first-question'>
        Quantas pessoas tem na equipe que você está?
        <label>
          <input type='radio' name='first-question' value='1-3' />
          Entre 1 e 3
        </label>
        <label>
          <input type='radio' name='first-question' value='4-6' />
          Entre 4 e 6
        </label>
        <label>
          <input type='radio' name='first-question' value='7-9' />
          Entre 7 e 9
        </label>
        <label>
          <input type='radio' name='first-question' value='10-14' />
          Entre 10 e 14
        </label>
        <label>
          <input type='radio' name='first-question' value='15' />
          Mais de 15
        </label>
      </form>
    </>
  )
}

export default FirstQuestion
