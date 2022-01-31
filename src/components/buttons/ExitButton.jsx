import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { clearUserInfo } from '../../utils/localStorage'

function ExitButton () {
  const {
    setUserInfo,
    setAnswers,
    setHeaderInfo
  } = useContext(MainContext)
  const navigate = useNavigate()

  const redirectHomePage = () => {
    clearUserInfo()
    setUserInfo({
      name: '',
      email: ''
    })

    setHeaderInfo({
      name: '',
      email: ''
    })

    setAnswers({
      firstQuestion: '',
      secondQuestion: ''
    })
    navigate('/home')
  }

  return (
    <button
      type='button'
      onClick={() => redirectHomePage()}
      className='modal-btn-exit'
    >
      Sair
      <LogoutIcon />
    </button>
  )
}

export default ExitButton
