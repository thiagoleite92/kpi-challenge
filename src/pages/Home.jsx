import React from 'react'
import Logo from '../components/logo/Logo'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  return (
    <main className='main-home'>
      <Logo home='main-logo' />
      <div>
        <button
          type='button'
          className='btn-home'
          onClick={() => navigate('/forms')}
        >
          Ir para o formulário
        </button>
      </div>
    </main>
  )
}

export default Home
