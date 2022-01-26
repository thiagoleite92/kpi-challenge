import React, { useState } from 'react'
import Header from '../components/header/Header'
import Modal from '../components/modal/Modal'

function Forms () {
  const [modal, setModal] = useState(true)

  const renderForms = () => {
    return (
      <>
        <Header />
        <div>forms</div>
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

export default Forms
