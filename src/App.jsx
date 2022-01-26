import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Forms from './pages/Forms'
import Home from './pages/Home'
import './App.css'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/forms' />} />
      <Route path='/forms' element={<Forms />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
