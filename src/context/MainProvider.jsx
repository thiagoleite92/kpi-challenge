import React from 'react'
import PropTypes from 'prop-types'
import MainContext from './MainContext'

function MainProvider ({ children }) {
  return (
    <MainContext.Provider value={{}}>
      {children}
    </MainContext.Provider>
  )
}

MainProvider.propTypes = {
  children: PropTypes.node
}.isRequired

export default MainProvider
