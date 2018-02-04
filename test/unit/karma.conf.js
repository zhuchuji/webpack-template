const webpackTestConfig = require('../../build/webpack.test.conf.js')

module.exports = function (config) {
  config.set({
    files: [
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec', 'coverage'],
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: process.env.npm_config_singleRun,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
