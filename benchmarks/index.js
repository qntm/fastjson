const fastjson = require('../src/index.js')
const chance = new (require('chance'))()
const Benchmark = require('benchmark')

const cyan = '\x1b[1m\x1b[36m'
const reset = '\x1b[0m'

console.log('Running benchmarks...')

/* Generate big array */
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

function runSuite (func, arg, cb) {
  const suite = new Benchmark.Suite()
  suite.add(`fastjson.${func}`, () => {
    fastjson[func](arg)
  }).add(`JSON.${func}`, () => {
    JSON[func](arg)
  }).on('cycle', (event) => {
    console.log(String(event.target))
  }).on('complete', function () {
    console.log(`${cyan}Fastest is: ${this.filter('fastest').map('name')}${reset}`)
    if (cb) {
      cb()
    }
  }).run({ async: true })
}

runSuite('stringify', arr, () => {
  runSuite('parse', str, null)
})
