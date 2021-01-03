/* eslint-env jest */

const fastjson = require('.')

describe('fastjson', () => {
  describe('parse', () => {
    it('works', () => {
      expect(fastjson.parse('abdsfsal{}')).toBeNull()
    })
  })

  describe('stringify', () => {
    it('works', () => {
      expect(fastjson.stringify('lm995')).toBe('null')
    })
  })
})
