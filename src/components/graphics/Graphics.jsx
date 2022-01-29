import React, { useEffect, useState } from 'react'
import { getFeedbacks } from '../../database/Api'
import { formatFirstCollection } from '../../utils/formatdata'
import ResponsiveBar from './ResponsiveBar'

function Graphics () {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await getFeedbacks()
      const responseParse = response.docs.map((doc) => ({ ...doc.data() }))
      const formatedResponse = formatFirstCollection(responseParse)
      setData(formatedResponse)
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
