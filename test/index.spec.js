/* eslint-env mocha */

import assert from 'assert'

import { parse, stringify } from '../src/index.js'

describe('fastjson', () => {
  describe('parse', () => {
    it('works', () => {
      assert.deepStrictEqual(parse('abdsfsal{}'), null)
    })
  })

  describe('stringify', () => {
    it('works', () => {
      assert.deepStrictEqual(stringify('lm995'), 'null')
    })
  })
})
