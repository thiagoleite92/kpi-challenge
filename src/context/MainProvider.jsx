import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MainContext from './MainContext'
import { validateName, validateEmail } from '../utils/validations'

function MainProvider ({ children }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  })

  const [headerInfo, setHeaderInfo] = useState({
    name: '',
    email: ''
  })

  const [answers, setAnswers] = useState({
    firstQuestion: '',
    secondQuestion: ''
  })

  const handleOptions = ({ target: { name, value } }) => {
    setAnswers((oldState) => ({
      ...oldState,
      [name]: value
    }))
  }

  const [isLoading, setIsLoading] = useState(true)

  const [continueButton, setContinueButton] = useState(true)

  useEffect(() => {
    const userValidate = () => {
      if (validateName(userInfo.name) && validateEmail(userInfo.email)) {
        return setContinueButton(false)
      }
      return setContinueButton(true)
    }
    userValidate()
  }, [userInfo])

  const context = {
    userInfo,
    setUserInfo,
    continueButton,
    setContinueButton,
    headerInfo,
    setHeaderInfo,
    answers,
    setAnswers,
    handleOptions,
    isLoading,
    setIsLoading
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
