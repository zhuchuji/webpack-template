const webpackTestConf = require('../../build/webpack.test.conf.js')

module.exports = function (config) {
  config.set({
    files: [
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    browsers: ['ChromeHeadless'],
    browserDisconnectTolerance: 10,
    browserNoActivityTimeout: 100000,
    frameworks: ['mocha', 'chai'],
    reporters: ['spec', 'coverage'],
    webpack: webpackTestConf,
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
