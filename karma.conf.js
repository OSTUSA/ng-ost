module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'misc/test-lib/jQuery/jquery-2.0.3.js',
            'misc/test-lib/bootstrap/bootstrap.min.js',
            'misc/test-lib/angular/angular.js',
            'misc/test-lib/angular/angular-mocks.js',
            'misc/test-lib/helpers.js',
            'misc/test-lib/testabilityPatch.js',
            'src/**/*.js'
        ],
        exclude: [],
        browsers: ['Chrome'],
        reporters: ['progress'],
        port: 9876,
        runnerPort : 9100,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: false
    });
};
