const fastjson = require('.');
const chance = new (require('chance'))();
const Benchmark = require('benchmark');

var cyan = '\x1b[1m\x1b[36m';
var reset = '\x1b[0m';

console.log('Running benchmarks...');

/* Generate big array */
var arr = new Array(2 ** 8).fill().map(() => {
  var obj = new Object();

  for (let i = 0; i < 2 ** 8; i++) {
    var key = chance.string({'length': 16});
    var value = chance.string({'length': 64});
    obj[key] = value;
  }
  return obj;
});

var str = JSON.stringify(arr);

function suite_run(func, arg, cb) {
  var suite = new Benchmark.Suite();
  suite.add(`fastjson.${func}`, () => {
    fastjson[func](arg);
  }).add(`JSON.${func}`, () => {
    JSON[func](arg);
  }).on('cycle', (event) => {
    console.log(String(event.target));
  }).on('complete', function () {
    console.log(`${cyan}Fastest is: ${this.filter('fastest').map('name')}${reset}`);
    if (!!cb) {
      cb();
    }
  }).run({'async': true});
}

suite_run('stringify', arr, () => {
  suite_run('parse', str, null);
});
