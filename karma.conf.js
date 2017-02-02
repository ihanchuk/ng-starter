const path = require("path");
const webPackConfig = require("./webpack.config");
const entry = path.resolve(webPackConfig.context,webPackConfig.entry);

var processors = {};

processors[entry]=["webpack"];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai'],

    // list of files / patterns to load in the browser
    files: ["./app/test/*"],
    // files: [entry],

    files: [
        {
          pattern: './app/**/*.test.js', watched: false
        }
          // each file acts as entry point for the webpack configuration
      ],

      preprocessors: {
          './app/**/*.test.js': ['webpack','coverage'],
      },

      reporters: ['progress','htmlDetailed','coverage'],

    webpack:webPackConfig,
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: processors,

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins:[
        require("karma-webpack"),
        'karma-chai',
        'karma-mocha',
        'karma-chrome-launcher',
        'karma-html-detailed-reporter',
        'karma-coverage'
    ],
    htmlDetailed: {
          splitResults: true
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
