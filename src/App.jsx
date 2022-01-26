import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Forms from './pages/Forms'
import Home from './pages/Home'
import './App.css'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/forms' element={<Forms />} />
    </Routes>
  )
}

export default App
