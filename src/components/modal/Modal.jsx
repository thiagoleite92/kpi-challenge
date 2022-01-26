import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './modal.css'
import MainContext from '../../context/MainContext'

function Modal ({ setModal }) {
  const navigate = useNavigate()
  const { userInfo, setUserInfo } = useContext(MainContext)

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setUserInfo((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }

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
            <input
              type='text'
              autoFocus placeholder='Maria Joaquina'
              maxLength='25'
              minLength='15'
              className='modal-input'
              value={userInfo.name}
              name='name'
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              placeholder='joaquinamaria@email.com'
              className='modal-input'
              maxLength='25'
              value={userInfo.email}
              name='email'
              onChange={(e) => handleInputChange(e)}
            />
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
