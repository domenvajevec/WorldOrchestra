module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',

    frameworks: [
      'mocha', 'chai', 'sinon'
    ],

    // list of files / patterns to load in the browser
    files: require('./include.conf.js').concat([
      //'test/bower_components/**/*.js',
      //'test/unit/**/*.js',
      //{
      //  pattern: '/soundfont/**/*.mp3',
      //  watched: false,
      //  included: false,
      //  served: true
      //}]),
]),
    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],
    //
    //proxies: {
    //  '/soundfont/': 'http://localhost:9000/base/soundfont/'
    //},

    // progress reporter: lists each test run and whether they pass/fail
    // coverage reporter: creates coverage reports for every tested browser
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // the browsers that should be tested
    browsers: [
      'Chrome'
    ],

    preprocessors: {
      // Source files you want to generate coverage reports for
      // This should not include tests or libraries
      // These files will be instrumented by Istanbul
      'public/js/**/*.js': ['coverage']
    },

    // Configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'results/coverage/'
    },

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 30000,

    // Auto run tests on start (when browsers are captured) and exit
    singleRun: false,

    // report which specs run too slowly
    reportSlowerThan: 500,

    // any additional plugins needed for testing
    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-chrome-launcher'
    ]
  });
};
