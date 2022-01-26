import React, { useContext } from 'react'
import MainContext from '../../context/MainContext'
import Logo from '../logo/Logo'
import './header.css'

function Header () {
  const { userInfo } = useContext(MainContext)
  return (
    <header className='header'>
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='header-user-info'>
        <div>
          Nome: {userInfo.name}
        </div>
        <div>
          Email: {userInfo.email}
        </div>
      </div>
    </header>
  )
}

export default Header
