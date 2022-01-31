/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'

import { ResponsiveBar } from '@nivo/bar'
import { getSecondCollection } from '../../database/Api'
import { formatSecondCollection } from '../../utils/formatdata'

const SecondQuestionResult = () => {
  const [feedBacks, setFeedBacks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const responseSecondCollection = await getSecondCollection()
      const parseSecondCollection = responseSecondCollection.docs.map((doc) => ({ ...doc.data() }))

      const formatedSecondCollection = formatSecondCollection(parseSecondCollection)

      setFeedBacks(formatedSecondCollection)
      setLoading(false)
    }
    fetchFeedbacks()
  }, [])

  if (loading) {
    return <div>Carregando gráfico</div>
  }

  return (
    <main style={{ height: '400px' }}>
      <div>Seu nível de satisfação?</div>
      <ResponsiveBar
        data={feedBacks}
        keys={[
          'Quantidade'
        ]}
        indexBy='value'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'quantity'
            },
            id: 'dots'
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Nível de satisfação',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Numero de respostas',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role='application'
        ariaLabel='Nivo bar chart demo'
        barAriaLabel={function (e) { return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue }}
      />
    </main>
  )
}

export default SecondQuestionResult
