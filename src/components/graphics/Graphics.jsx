import React, { useEffect, useState } from 'react'
import { getFirstCollection, getSecondCollection } from '../../database/Api'
import { formatFirstCollection, formatSecondCollection } from '../../utils/formatdata'
import FirstQuestionResult from './FirstQuestionResult'
import SecondQuestionResult from './SecondQuestionResult'

function Graphics () {
  const [firstCollectionData, setFirstCollectionData] = useState([])
  const [secondCollectionData, setsecondCollectionData] = useState([])

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const responseFirstCollection = await getFirstCollection()
      const responseSecondCollection = await getSecondCollection()

      const parseFirstCollection = responseFirstCollection.docs.map((doc) => ({ ...doc.data() }))
      const parseSecondCollection = responseSecondCollection.docs.map((doc) => ({ ...doc.data() }))

      console.log(parseSecondCollection)

      const formatedFirstCollection = formatFirstCollection(parseFirstCollection)
      const formatedSecondCollection = formatSecondCollection(parseSecondCollection)

      setFirstCollectionData(formatedFirstCollection)
      setsecondCollectionData(formatedSecondCollection)
    }
    fetchFeedbacks()
  }, [])

  return (
    <div style={{ height: '500px', display: 'flex' }}>
      <FirstQuestionResult data={firstCollectionData} />
      <SecondQuestionResult data={secondCollectionData} />
    </div>
  )
}

export default Graphics
