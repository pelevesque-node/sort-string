/* global describe, it */
'use strict'

const expect = require('chai').expect
const sortString = require('../index')

describe('#sort-string', () => {
  it('should sort a string alphanumerically', () => {
    const str = '321bca321'
    const result = sortString(str)
    const expected = '112233abc'
    expect(result).to.equal(expected)
  })
})
