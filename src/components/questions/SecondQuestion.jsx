import React from 'react'

function SecondQuestion () {
  return (
    <>
      Segunda pergunta
      <form className='first-question'>
        Qual seu nível de satisfação com a empresa?
        <label>
          <input type='radio' name='first-question' value='1' />
          1 - Pouco Satisfeito
        </label>
        <label>
          <input type='radio' name='first-question' value='2' />
          2
        </label>
        <label>
          <input type='radio' name='first-question' value='3' />
          3
        </label>
        <label>
          <input type='radio' name='first-question' value='4' />
          4
        </label>
        <label>
          <input type='radio' name='first-question' value='5' />
          5 - Satisfação média
        </label>
        <label>
          <input type='radio' name='first-question' value='6' />
          6
        </label>
        <label>
          <input type='radio' name='first-question' value='7' />
          7
        </label>
        <label>
          <input type='radio' name='first-question' value='8' />
          8
        </label>
        <label>
          <input type='radio' name='first-question' value='9' />
          9
        </label>
        <label>
          <input type='radio' name='first-question' value='10' />
          10 - Muito Satisfeito
        </label>
      </form>
    </>
  )
}

export default SecondQuestion
