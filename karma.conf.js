module.exports = function(config) {
  config.set({
    // Basispfad fuer Patterns, z.B. bei "files" und "exclude"
    basePath: '',

    // siehe https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // Dateien, die in den Browser geladen werden sollen
    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-i18n/angular-locale_de.js',
        'bower_components/lodash/lodash.js',
        'bower_components/traceur/traceur.js',
        'nonMinified/shop.js',
//        'public_html/util/*.js',
//        'public_html/artikelverwaltung/*.js',
//        'public_html/bestellverwaltung/*.js',
//        'public_html/kundenverwaltung/*.js',
//        'public_html/app/*.js',
        'test/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // Darstellung der Testergebnisse
    // siehe https://npmjs.org/browse/keyword/karma-reporter
//    reporters: ['progress', 'coverage'],
    reporters: ['progress'],

    // Port fuer Webserver (default)
    port: 9876,

    colors: true,

    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // 'Firefox', 'IE', 'Safari', 'PhantomJS'
    // siehe https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Modus fuer Continuous Integration
    autoWatch: true,
    singleRun: false
  });
};
