export function randomNumberBetween (minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

export function weightedRandomFrom (items) {
  const sumOfWeights = items.map(item => item[1]).reduce((previous, current) => previous + current, 0)

  let randomIndex = Math.floor(Math.random() * sumOfWeights)
  let result

  items.some(item => {
    const instance = item[0]
    const weight = item[1] || 1

    randomIndex -= weight

    if (randomIndex < 0) {
      result = instance

      return true
    }
  })

  return result
}
