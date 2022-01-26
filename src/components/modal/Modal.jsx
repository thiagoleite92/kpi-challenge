import React from 'react'
import './modal.css'

// eslint-disable-next-line react/prop-types
function Modal ({ setModal }) {
  return (
    <div className='modal-background'>
      <main className='modal-container'>
        <h1 className='modal-title'>
          Bem vindo(a)!
          <br />
          Digite seu nome e seu email para poder responder a pesquisa.
        </h1>
        <form className='modal-form'>
          <label>
            Nome:
            <input type='text' placeholder='Maria Joaquina' className='modal-input' />
          </label>
          <label>
            Email:
            <input type='email' placeholder='joaquinamaria@email.com' className='modal-input' />
          </label>
          <button type='button' onClick={() => setModal(false)} className='modal-btn-continue'>
            Confirmar
          </button>
          <button type='button' className='modal-btn-exit'>
            Sair
          </button>
        </form>
      </main>
    </div>
  )
}

export default Modal
