import React from 'react'
import './header.css'

function Header () {
  return (
    <header className='header'>
      <div className='header-logo'>
        logo
      </div>
      <div className='header-user-info'>
        <div>
          Nome
        </div>
        <div>
          Email
        </div>
      </div>
    </header>
  )
}

export default Header
