import React from 'react'
import ReactLoading from 'react-loading'
import './loading.css'

function Loading () {
  return (
    <div className='graphic-loading'>
      <ReactLoading
        color='#000000'
        type='spokes'
      />
    </div>
  )
}

export default Loading
