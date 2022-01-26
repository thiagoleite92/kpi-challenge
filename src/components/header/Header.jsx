import React from 'react'
import Logo from '../logo/Logo'
import './header.css'

function Header () {
  return (
    <header className='header'>
      <div className='header-logo'>
        <Logo />
      </div>
      <div className='header-user-info'>
        <div>
          Nome: Thiago José Siqueira Leite
        </div>
        <div>
          Email: thiago.jsl@hotmail.com
        </div>
      </div>
    </header>
  )
}

export default Header
