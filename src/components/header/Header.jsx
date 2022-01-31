import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContext from '../../context/MainContext'
import ExitButton from '../buttons/ExitButton'
import Logo from '../logo/Logo'
import { fetchUserInfo } from '../../utils/localStorage'
import './header.css'

function Header () {
  const { headerInfo: { name, email }, setHeaderInfo } = useContext(MainContext)
  const navigate = useNavigate()

  useEffect(() => {
    const checkLocalStorage = () => {
      if (!fetchUserInfo()) navigate('/results')
      setHeaderInfo(fetchUserInfo())
    }
    checkLocalStorage()
  }, [navigate, setHeaderInfo])

  return (
    <header className='header'>
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='header-user-info'>
        <div>
          Nome: {name}
        </div>
        <div>
          Email: {email}
        </div>
      </div>
      <ExitButton />
    </header>
  )
}

export default Header
