import React, { useState } from 'react'
import Header from '../components/header/Header'
import Modal from '../components/modal/Modal'

function Forms () {
  const [modal, setModal] = useState(true)
  console.log(setModal)

  const renderForms = () => {
    return (
      <Header />
    )
  }

  return (
    <>
      {
        modal
          ? <Modal />
          : renderForms()
      }
    </>
  )
}

export default Forms
