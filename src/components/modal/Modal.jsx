import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './modal.css'
import MainContext from '../../context/MainContext'
import Message from './Message'

function Modal ({ setModal }) {
  const navigate = useNavigate()
  const {
    userInfo,
    setUserInfo,
    continueButton,
    setHeaderInfo,
    setAnswers
  } = useContext(MainContext)

  const handleInputChange = ({ target }) => {
    const { name, value } = target

    setUserInfo((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }

  const handleContinueButton = () => {
    setHeaderInfo(userInfo)
    setModal(false)
    setUserInfo({
      name: '',
      email: ''
    })
    setAnswers({
      firstQuestion: '',
      secondQuestion: ''
    })
  }

  const redirectHomePage = () => {
    navigate('/home')
  }

  return (
    <div className='modal-background'>
      <main className='modal-container'>
        <h1 className='modal-title'>
          Bem vindo(a),
          <br />
          Que bom ter você aqui!
        </h1>
        <form className='modal-form'>
          <label>
            <input
              type='text'
              autoFocus placeholder='Seu Nome'
              maxLength='25'
              minLength='15'
              className='modal-input'
              value={userInfo.name}
              name='name'
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <label>
            <input
              type='email'
              placeholder='email@exemplo.com'
              className='modal-input'
              maxLength='25'
              value={userInfo.email}
              name='email'
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <button
            type='button'
            disabled={continueButton}
            onClick={() => handleContinueButton()}
            className='modal-btn-continue'
          >
            Confirmar
          </button>
          {
            continueButton
              ? <Message />
              : null
          }
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
