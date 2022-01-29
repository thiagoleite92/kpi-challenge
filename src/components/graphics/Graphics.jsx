import React, { useEffect, useState } from 'react'
import { getFeedbacks } from '../../database/Api'
import ResponsiveBar from './ResponsiveBar'

function Graphics () {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await getFeedbacks()
      console.log(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setData(response.docs.map((doc) => ({ ...doc.data() })))
    }
    fetchFeedbacks()
  }, [])

  return (
    <div style={{ height: '500px' }}>
      Quantas pessoas tem sua equipe?
      <ResponsiveBar data={data} />
    </div>
  )
}

export default Graphics
