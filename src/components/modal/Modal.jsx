import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './modal.css'

function Modal ({ setModal }) {
  const navigate = useNavigate()

  const redirectHomePage = () => {
    navigate('/home')
  }

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
            <input type='text' autoFocus placeholder='Maria Joaquina' className='modal-input' />
          </label>
          <label>
            Email:
            <input type='email' placeholder='joaquinamaria@email.com' className='modal-input' />
          </label>
          <button
            type='button'
            onClick={() => setModal(false)}
            className='modal-btn-continue'
          >
            Confirmar
          </button>
          <button
            type='button'
            onClick={() => redirectHomePage()}
            className='modal-btn-exit'
          >
            Sair
          </button>
        </form>
      </main>
    </div>
  )
}

Modal.propTypes = {
  setModal: PropTypes.func
}.isRequired

export default Modal
