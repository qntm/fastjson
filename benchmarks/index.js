import benchmark from 'benchmark'
import Chance from 'chance'

import * as fastjson from '../src/index.js'

const chance = new Chance()

// Generate big array
const arr = new Array(2 ** 8).fill().map(() => {
  const obj = {}

  for (let i = 0; i < 2 ** 8; i++) {
    const key = chance.string({ length: 16 })
    const value = chance.string({ length: 64 })
    obj[key] = value
  }

  return obj
})

const str = JSON.stringify(arr)

console.log('Running benchmarks...')

const runSuite = (func, arg) => new Promise(resolve => {
  const suite = new benchmark.Suite()

  suite
    .add(`fastjson.${func}`, () => {
      fastjson[func](arg)
    })
    .add(`JSON.${func}`, () => {
      JSON[func](arg)
    })
    .on('cycle', event => {
      console.log(String(event.target))
    })
    .on('complete', function () {
      console.log(`Fastest is: ${this.filter('fastest').map('name')}`)
      console.log()
      resolve()
    })
    .run({ async: true })
})

Promise.resolve().then(async () => {
  await runSuite('stringify', arr)
  await runSuite('parse', str)
})
