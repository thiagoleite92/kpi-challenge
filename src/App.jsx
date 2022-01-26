import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Forms from './pages/Forms'
import Welcome from './pages/Welcome'
import './App.css'

function App () {
  return (
    <Routes>
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/' element={<Forms />} />
    </Routes>
  )
}

export default App
