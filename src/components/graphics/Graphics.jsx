import React, { useEffect, useState } from 'react'
import { getFirstCollection } from '../../database/Api'
import { formatFirstCollection } from '../../utils/formatdata'
import FirstQuestionResult from './FirstQuestionResult'
import SecondQuestionResult from './SecondQuestionResult'

function Graphics () {
  const [firstCollectionData, setFirstCollectionData] = useState([])

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const responseFirstCollection = await getFirstCollection()

      const parseFirstCollection = responseFirstCollection.docs.map((doc) => ({ ...doc.data() }))

      const formatedFirstCollection = formatFirstCollection(parseFirstCollection)

      setFirstCollectionData(formatedFirstCollection)
    }
    fetchFeedbacks()
  }, [])

  return (
    <div style={{ height: '500px', display: 'flex' }}>
      <FirstQuestionResult data={firstCollectionData} />
      <SecondQuestionResult />
    </div>
  )
}

export default Graphics
