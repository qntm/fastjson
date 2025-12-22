/* eslint-env mocha */

import assert from 'node:assert/strict'

import { parse, stringify } from '../src/index.js'

describe('fastjson', () => {
  describe('parse', () => {
    it('works', () => {
      assert.deepEqual(parse('abdsfsal{}'), null)
    })
  })

  describe('stringify', () => {
    it('works', () => {
      assert.deepEqual(stringify('lm995'), 'null')
    })
  })
})
