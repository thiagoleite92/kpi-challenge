const teste = [
  { value: 'a', quantity: 7 },
  { quantity: 1, value: 'd' },
  { quantity: 7, value: 'e' },
  { value: 'b', quantity: 5 },
  { quantity: 3, value: 'c' }
]

function sortData (data) {
  const sortedData = data.sort((a, b) => {
    if (a.value < b.value) {
      return -1
    }
    if (a.value > b.value) {
      return 1
    }
    return 0
  })

  return sortedData
}

function correctKeyValues (data) {
  const correctValues = [
    { a: '1-3' },
    { b: '4-6' },
    { c: '7-9' },
    { d: '10-14' },
    { e: '15 ou mais' }
  ]

  const correctedKeys = data.map(({ value, quantity }, i) => {
    return { value: correctValues[i][value], Quantidade: quantity }
  })

  return correctedKeys
}

function formatFirstCollection (firstCollection) {
  const formatedData = correctKeyValues(sortData(firstCollection))

  return formatedData
}

console.log(formatFirstCollection(teste))
