module.exports = {
  verbose: true,
  bail: false,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/*.js',
    '!src/*.spec.js'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
