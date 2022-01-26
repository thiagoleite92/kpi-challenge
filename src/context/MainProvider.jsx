import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MainContext from './MainContext'

function MainProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  })

  console.log(userInfo)

  const context = {
    userInfo,
    setUserInfo
  }

  return (
    <MainContext.Provider value={context}>
      {children}
    </MainContext.Provider>
  )
}

MainProvider.propTypes = {
  children: PropTypes.node
}.isRequired

export default MainProvider
