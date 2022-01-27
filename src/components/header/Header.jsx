import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'
import ExitButton from '../buttons/ExitButton'
import Logo from '../logo/Logo'
import './header.css'

function Header () {
  const { headerInfo } = useContext(MainContext)
  return (
    <header className='header'>
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='header-user-info'>
        <div>
          Nome: {headerInfo.name}
        </div>
        <div>
          Email: {headerInfo.email}
        </div>
      </div>
      <ExitButton />
    </header>
  )
}

export default Header
