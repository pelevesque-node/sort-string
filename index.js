'use strict'

module.exports = (str) => {
  const arr = str.split('')
  const sorted = arr.sort()
  return sorted.join('')
}
