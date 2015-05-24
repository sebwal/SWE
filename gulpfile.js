'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    tsc = require('gulp-typescript');

//runs webserver    
gulp.task('webserver', function(){
    gulp.src('.')
      .pipe(webserver({      
        port: 1337,
        open: 'http://localhost:1337/src',
        livereload: {
          enable: true
        }
      }));
});
//compiles the .ts files to app.js
gulp.task('tsc', function(){
  gulp.src('./src/**/*.ts')
    .pipe(tsc({
      out: 'app.js'
    }))
    .pipe(gulp.dest('./src/components/app'));
});
//uglifies app.js into app.uglified.js
gulp.task('uglify', function(){
  gulp.src('./src/**/*.ts')
    .pipe(tsc({
      out: 'app.js'
    }))
    .pipe(uglify())
    .pipe(concat('app.uglified.js'))
    .pipe(gulp.dest('./src/components/app'));
});
//runs the specified tasks whenever a change in the src folder is made (and saved)
gulp.watch('./src/*', function(){
  gulp.run('tsc');
  gulp.run('uglify');
});

//this defines the tasks that are run when the command '>gulp' is executed in command prompt
gulp.task('default', ['uglify', 'webserver', 'tsc']);