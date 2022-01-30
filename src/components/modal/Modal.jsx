import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './modal.css'
import MainContext from '../../context/MainContext'
import CheckIcon from '@mui/icons-material/Check'
import Message from './Message'
import ExitButton from '../buttons/ExitButton'

function Modal ({ setModal }) {
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
            <CheckIcon />
            Confirmar
          </button>
          {
            continueButton
              ? <Message />
              : null
          }
          <ExitButton />
        </form>
      </main>
    </div>
  )
}

Modal.propTypes = {
  setModal: PropTypes.func
}.isRequired

export default Modal
