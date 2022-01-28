/* eslint-disable react/jsx-no-bind */
import React from 'react'
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsiveBar } from '@nivo/bar'

const teste = [
  {
    values: '1-3',
    Quantidade: 15,
    QuantidadeColor: 'hsl(59, 70%, 50%)'
  },
  {
    values: '4-6',
    Quantidade: 10,
    QuantidadeColor: 'hsl(59, 70%, 50%)'
  },
  {
    values: '7-9',
    Quantidade: 8,
    QuantidadeColor: 'hsl(59, 70%, 50%)'
  },
  {
    values: '10-14',
    Quantidade: 5,
    QuantidadeColor: 'hsl(59, 70%, 50%)'
  },
  {
    values: '15 ou mais',
    Quantidade: 3,
    QuantidadeColor: 'hsl(59, 70%, 50%)'
  }
]

// const teste2 = [
//   {
//     country: 'AD',
//     'hot dog': 171,
//     'hot dogColor': 'hsl(59, 70%, 50%)',
//     burger: 176,
//     burgerColor: 'hsl(8, 70%, 50%)',
//     sandwich: 70,
//     sandwichColor: 'hsl(36, 70%, 50%)',
//     kebab: 54,
//     kebabColor: 'hsl(41, 70%, 50%)',
//     fries: 196,
//     friesColor: 'hsl(73, 70%, 50%)',
//     donut: 4,
//     donutColor: 'hsl(151, 70%, 50%)'
//   }
// ]
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// eslint-disable-next-line react/prop-types
const MyResponsiveBar = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={teste}
    keys={[
      'Quantidade'
    ]}
    indexBy='values'
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
