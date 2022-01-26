import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MainProvider from './context/MainProvider'

ReactDOM.render(
  <MainProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MainProvider>,
  document.getElementById('root')
)
