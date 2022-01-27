import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import FormsPage from './pages/FormsPage'
import Home from './pages/Home'
import './App.css'
import ResultsPage from './pages/ResultsPage'

function App () {
  return (
    <Routes>
      <Route path='/forms' element={<FormsPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/results' element={<ResultsPage />} />
      <Route path='/' element={<Navigate to='/forms' />} />
    </Routes>
  )
}

export default App
