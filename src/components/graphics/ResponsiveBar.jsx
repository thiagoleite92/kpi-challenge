/* eslint-disable react/jsx-no-bind */
import React from 'react'

import { ResponsiveBar } from '@nivo/bar'

const teste = [
  {
    value: '1-3',
    Quantidade: 6
  },
  {
    value: '4-6',
    Quantidade: 10
  },
  {
    value: '7-9',
    Quantidade: 8
  },
  {
    value: '10-14',
    Quantidade: 5
  },
  {
    value: '15 ou mais',
    Quantidade: 3
  }
]

// eslint-disable-next-line react/prop-types
const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={teste}
    keys={[
      'Quantidade'
    ]}
    indexBy='value'
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'dark2' }}
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
      legend: 'Pessoas por equipe',
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
)

export default MyResponsiveBar
