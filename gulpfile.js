/* global require, __dirname, process */

'use strict';

var gulp = require('gulp'),

    // die Plugins gulp-* aus package.json "lazy" laden als z.B. plugins.jshint
    plugins = require('gulp-load-plugins')(),
    shelljs = require('shelljs'),
    del = require('del'),
    karma = require('karma').server,
    //plato = require('plato'),

    // Datei package.json fuer NPM
    pkg = require('./package.json'),

    dir =
        {
          src: 'src',
          components: 'src/components',
          dist: 'dist',
          nonMinified: 'nonMinified',
          bower: 'bower_components',
          ng: 'bower_components',
          npm: 'node_modules'
        },

    distdir =
        {
          js: dir.dist + '/js',
          css: dir.dist + '/css',
          fonts: dir.dist + '/fonts',
          img: dir.dist + '/img',
          doc: dir.dist + '/doc',
          plato: dir.dist + '/plato'
        },

    dateien = {
        js: [
            dir.components + '/util/appUtil.js',
            dir.components + '/util/config.js',
            dir.components + '/util/values.js',
            dir.components + '/util/notificationService.js',
            dir.components + '/util/iamService.js',
            dir.components + '/artikelverwaltung/appArtikelverwaltung.js',
            dir.components + '/artikelverwaltung/katalogService.js',
            dir.components + '/artikelverwaltung/artikelService.js',
            dir.components + '/artikelverwaltung/listArtikel/listArtikelController.js',
            dir.components + '/artikelverwaltung/warenkorb/warenkorbController.js',
            dir.components + '/artikelverwaltung/createArtikel/createArtikelController.js',
            dir.components + '/bestellverwaltung/appBestellverwaltung.js',
            dir.components + '/bestellverwaltung/bestellungService.js',
            dir.components + '/bestellverwaltung/bestaetigung/bestaetigungController.js',
            dir.components + '/kundenverwaltung/appKundenverwaltung.js',
            dir.components + '/kundenverwaltung/kundeService.js',
            dir.components + '/kundenverwaltung/registrierungService.js',
            dir.components + '/kundenverwaltung/kundeBestellungenService.js',
            dir.components + '/kundenverwaltung/detailsKunde/detailsKundeController.js',
            dir.components + '/kundenverwaltung/listKunden/listKundenController.js',
            dir.components + '/kundenverwaltung/registrierePrivatkunde/registrierePrivatkundeController.js',
            dir.components + '/kundenverwaltung/updateKunde/updateKundeController.js',
            dir.components + '/app/app.js',
            dir.components + '/app/headerController.js',
            dir.components + '/app/navController.js',
            dir.components + '/app/componentLoaderConfig.js',
            dir.components + '/app/appController.js'
        ],
        jsOther: [
            dir.bower + '/angular/*.min.js',
            dir.bower + '/angular/*.min.js.map',
            dir.bower + '/angular-resource/*.min.js',
            dir.bower + '/angular-resource/*.min.js.map',
            dir.bower + '/angular-new-router/dist/*.min.js',
            dir.bower + '/angular-animate/*.min.js',
            dir.bower + '/angular-animate/*.min.js.map',
            dir.bower + '/angular-i18n/angular-locale_de.js',
            dir.bower + '/lodash/lodash.min.js',
            dir.bower + '/bootstrap/dist/js/*.min.js',
            dir.bower + '/moment/min/moment-with-locales.min.js',
            dir.bower + '/jquery/dist/*.min.*',
            dir.npm + '/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js'
        ],
        jsWatch: [
            dir.bower + '/angular/*.min.js',
            dir.bower + '/angular-resource/*.min.js',
            dir.bower + '/angular-new-router/dist/router.es5.min.js',
            dir.bower + '/angular-animate/*.min.js',
            dir.bower + '/angular-i18n/angular-locale_de.js',
            dir.bower + '/lodash/*.min.js',
            dir.bower + '/bootstrap/dist/js/*.min.js',
            dir.bower + '/moment/min/moment-with-locales.min.js',
            dir.bower + '/jquery/dist/*.min.*',
            dir.npm + '/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js'
        ],
        sass: dir.src + '/sass/' + pkg.name + '.scss',
        cssOther: [
            dir.bower + '/bootstrap/dist/css/*.min.css',
            dir.bower + '/bootstrap/dist/css/*.css.map',
            dir.bower + '/fontawesome/css/*.min.css',
            dir.bower + '/fontawesome/css/*.css.map',
            dir.bower + '/material-design-icons/sprites/css-sprite/*.css',
            dir.bower + '/material-design-icons/sprites/css-sprite/*.png',
            dir.bower + '/animate.css/*.min.css'
        ],
        cssWatch: [
            dir.bower + '/bootstrap/dist/css/*.min.css',
            dir.bower + '/fontawesome/css/*.min.css',
            dir.bower + '/animate.css/*.min.css'
        ],
        fonts: dir.bower + '/fontawesome/fonts/*',
        html: dir.src + '/**/*.html',
        img: dir.src + '/img/*'
    };

gulp.task('jshint', function() {
    // --nocheck
    if (plugins.util.env.nocheck) {
        return;
    }

    return gulp.src(dateien.js)
        .pipe(plugins.cached('jshint'))
        .pipe(plugins.jshint('config/jshint.config'))
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('eslint', function() {
    // --nocheck
    if (plugins.util.env.nocheck) {
        return;
    }

    return gulp.src(dateien.js)
        .pipe(plugins.cached('eslint'))
        .pipe(plugins.eslint('config/eslint.json'))
        .pipe(plugins.eslint.format());
        //.pipe(plugins.eslint.failOnError());
});

gulp.task('clang-format', function() {
    // --clang
    if (!plugins.util.env.clang) {
        return;
    }

    // http://clang.llvm.org/docs/ClangFormatStyleOptions.html
    return gulp.src(dateien.js)
        // clang ist ein C/C++/Objective-C Compiler des Projekts LLVM http://www.llvm.org
        // Formatierungseinstellungen in .clang-format:
        // Google (default) http://google-styleguide.googlecode.com/svn/trunk/cppguide.html
        // LLVM http://llvm.org/docs/CodingStandards.html
        // Chromium http://www.chromium.org/developers/coding-style
        // Mozilla https://developer.mozilla.org/en-US/docs/Developer_Guide/Coding_Style
        // WebKit http://www.webkit.org/coding/coding-style.html
        .pipe(plugins.clangFormat.checkFormat('file'))
        .on('warning', function(e) {
            process.stdout.write(e.message);
            process.exit(1);
        });
});

gulp.task('sonar', function() {
    shelljs.exec('mvn sonar:sonar');
});

gulp.task('checkJS', ['eslint', 'jshint', 'clang-format'], function() {
});

gulp.task('minifyJS', ['checkJS'], function() {
    var minExt = '.min.js';
    return gulp.src(dateien.js)
        .pipe(plugins.newer(distdir.js + '/' + pkg.name + minExt))
        // https://github.com/google/traceur-compiler/wiki/Options-for-Compiling
        // https://github.com/google/traceur-compiler/wiki/LanguageFeatures#symbols-experimental
        // --traceur
        .pipe(plugins.util.env.traceur ? plugins.traceur({symbols: true}) : plugins.babel())
        .pipe(plugins.concat(pkg.name + '.js'))
        .pipe(gulp.dest(dir.nonMinified))
        .pipe(plugins.rename({ extname: minExt }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('.'))
        // --prod
        .pipe(plugins.util.env.prod ? plugins.stripDebug() : plugins.util.noop())
        .pipe(gulp.dest(distdir.js));
});

gulp.task('copyJS', function() {
    return gulp.src(dateien.jsOther)
        .pipe(plugins.newer(distdir.js))
        .pipe(gulp.dest(distdir.js));
});

gulp.task('minifyCss', function() {
    var minExt = '.min.css';

    return gulp.src(dateien.sass)
        .pipe(plugins.newer(distdir.css + '/' + pkg.name + minExt))
        .pipe(plugins.sass())
        // Zulaessige Prefixe (-webkit, -moz, ...) siehe http://caniuse.com
        .pipe(plugins.autoprefixer({
            // siehe https://github.com/ai/browserslist
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(dir.nonMinified))
        .pipe(plugins.rename({ extname: minExt }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(distdir.css));
});

gulp.task('copyCss', function() {
    return gulp.src(dateien.cssOther)
        .pipe(plugins.newer(distdir.css))
        .pipe(gulp.dest(distdir.css));
});

// Fontawesome erwartet die Font-Dateien relativ zur CSS-Datei im Verzeichnis ../fonts
gulp.task('copyFonts', function() {
    return gulp.src(dateien.fonts)
        .pipe(plugins.newer(distdir.fonts))
        .pipe(gulp.dest(distdir.fonts));
});

gulp.task('minifyHtml', function() {
    return gulp.src(dateien.html, {base: dir.src})
        .pipe(plugins.newer(dir.dist))
        // --prod
        .pipe(plugins.util.env.prod ? plugins.minifyHtml() : plugins.util.noop())
        .pipe(gulp.dest(dir.dist));
});

// nach der Installation von gulp-imagemin ist der Pfad node_modules\gulp-imagemini\... zum Loeschen zu lang
// Workaround: kuerzer Pfad durch das Windows-Kommando SUBST bis sich ein Teil des Pfades loeschen laesst usw.
gulp.task('minifyImages', function() {
    return gulp.src(dateien.img)
        .pipe(plugins.newer(distdir.img))
        // --prod
        .pipe(plugins.util.env.prod ? plugins.imagemin() : plugins.util.noop())
        .pipe(gulp.dest(distdir.img));
});

gulp.task('build', ['jshint', 'eslint', 'minifyJS', 'copyJS', 'minifyCss', 'copyCss', 'copyFonts',
                    'minifyHtml', 'minifyImages'], function() {
});

gulp.task('watch', ['build'], function() {
    plugins.util.log(plugins.util.colors.yellow.bgRed.bold('!!! Bei Aenderungen an HTML-Dateien neu starten !!!'));

    // Aenderungen an JavaScript-Dateien?
    gulp.watch(dateien.js, ['checkJS']);

    // Aenderungen an der Sass-Datei?
    gulp.watch(dateien.sass, ['minifyCss']);

    // Aenderungen an JavaScript-Bibliotheken?
    gulp.watch(dateien.jsWatch, ['copyJS']);

    // Aenderungen an CSS-Bibliotheken?
    gulp.watch(dateien.cssWatch, ['copyCss']);
    gulp.watch(dateien.fonts, ['copyFonts']);
});

gulp.task('default', ['watch'], function() {
});

gulp.task('clean', function() {
    del([dir.dist, dir.nonMinified]);
    // https://github.com/sindresorhus/chalk
    plugins.util.log(plugins.util.colors.yellow.bgRed.bold('!!! Sobald das Projekt mit gulp neu erstellt ist, !!!'));
    plugins.util.log(plugins.util.colors.yellow.bgRed.bold('!!! muss der Webserver NEU gestartet werden       !!!'));
});

gulp.task('webserver', function() {
    var browserSync = require('browser-sync'),
        host = '127.0.0.1',
        port = 9443,
        // Falls die Option --online nicht gesetzt ist, sind xip und tunnel deaktivviert (werden fuer SWE nicht benoetigt)
        online = plugins.util.env.online;

    browserSync.create().init({
        // http://www.browsersync.io/docs/options
        server: {baseDir: dir.dist},
        https: true,
        port: port,
        host: host,
        online: online,
        // Admin-Oberflaeche durch http://localhost:3001 wird deaktiviert
        ui: false,
        // 'default', 'firefox', 'chrome'
        browser: 'chrome'

        // Weitere Defaultwerte:
        // port: 3000
        // open: 'local'
    });

    // http-server als Webserver: kein Live-Reload?
    // https://www.npmjs.com/package/http-server
    // shelljs.exec('http-server ' + dir.dist + ' -a 127.0.0.1 -p ' + port + ' -S ' + ' -K config/key.pem -C config/certificate.cer');

    // gulp-webserver: kleiner Webserver
    // var webserver = require('gulp-webserver');
    // gulp.src(dir.dist)
    //     .pipe(webserver({
    //        livereload: true,
    //        https: true,
    //        port: port,
    //        fallback: 'index.html'
    //        // Weitere Defaultwerte:
    //        //host: 'localhost'
    //        //port: 8000
    //        //open: false
    // }));
});

gulp.task('test', function(cb) {
    // Konfigurationsdatei karma.conf.js
    karma.start({configFile: __dirname + '/karma.conf.js', singleRun: true}, cb);
});

// Karma beobachtet Aenderungen, um sofort die Tests auszufuehren, d.h. Aenderungen sofort testen
gulp.task('ci', function(cb) {
    // Konfigurationsdatei karma.conf.js
    karma.start({configFile: __dirname + '/karma.conf.js'}, cb);
});

// jsdoc
// alternativ siehe https://www.npmjs.com/package/angular-jsdoc
gulp.task('doc', function() {
    shelljs.exec('node node_modules/jsdoc/jsdoc.js'
        + ' -d ' + distdir.doc                         // output directory
        + ' -p'                                        // private
        + ' ' + dir.src + '/components/app'                       // source code directory
        + ' ' + dir.src + '/components/artikelverwaltung'
        + ' ' + dir.src + '/components/bestellverwaltung'
        + ' ' + dir.src + '/components/home'
        + ' ' + dir.src + '/components/kundenverwaltung'
        + ' ' + dir.src + '/components/util');
});

// Plato verwendet zur Code-Analyse den Esprima-Parser, der aber ES 2015 noch *NICHT* unterstuetzt
// http://esprima.org/doc/es6.html
// gulp.task('plato', function() {
//    plato.inspect(dateien.js, distdir.plato, {title: 'Codeanalyse'});
// });
