import React, { useEffect } from 'react'
import { getFeedbacks } from '../../database/Api'

function Graphics () {
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await getFeedbacks()
      console.log(data.docs.map((doc) => ({ ...doc.data() })))
    }
    fetchFeedbacks()
  }, [])
  return (
    <div>Resuls page</div>
  )
}

export default Graphics
