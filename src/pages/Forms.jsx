import React, { useState } from 'react'
import Header from '../components/header/Header'
import Modal from '../components/modal/Modal'

function Forms () {
  const [modal, setModal] = useState(true)
  console.log(setModal)

  return (
    <div className='forms'>
      {
        modal
          ? <Modal />
          : null
      }
      <Header />
    </div>
  )
}

export default Forms
