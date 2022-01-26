import React, { useState } from 'react'
import Questions from '../components/questions/Questions'
import Header from '../components/header/Header'
import Modal from '../components/modal/Modal'

function FormsPage () {
  const [modal, setModal] = useState(true)

  const renderForms = () => {
    return (
      <>
        <Header />
        <Questions />
      </>
    )
  }

  return (
    <>
      {
        modal
          ? <Modal setModal={setModal} />
          : renderForms()
      }
    </>
  )
}

export default FormsPage
