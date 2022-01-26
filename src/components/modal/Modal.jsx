import React from 'react'
import './modal.css'

function Modal () {
  return (
    <div className='modal-background'>
      <main className='modal-container'>
        <h1>
          Bem vindo(a)! Digite seu nome e seu email para poder responder a pesquisa.
        </h1>
        <label>
          Nome:
          <input type='text' placeholder='Maria Joaquina' />
        </label>
        <label>
          Email:
          <input type='email' placeholder='joaquinamaria@email.com' />
        </label>
        <button type='button'>
          Confirmar
        </button>
        <button type='button'>
          Sair
        </button>
      </main>
    </div>
  )
}

export default Modal
