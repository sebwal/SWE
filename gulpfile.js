'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    tsc = require('gulp-typescript'),
    jshint = require('gulp-jshint');

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
    .pipe(gulp.dest('./src/components/base/app'));
});
//uglifies app.js into app.min.js
gulp.task('uglify', function(){
  gulp.src('./src/**/*.ts')
    .pipe(tsc({
      out: 'app.js'
    }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./src/components/base/app'));
});
//
gulp.task('jshint', function(){
  return gulp.src('./src/components/base/app/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
//runs the specified tasks whenever a change in the src folder is made (and saved)
gulp.watch('./src/**/*.ts', function(){
  gulp.run('tsc');
  gulp.run('uglify');
  gulp.run('jshint');
});

//this defines the tasks that are run when the command '>gulp' is executed in command prompt
gulp.task('default', ['uglify', 'tsc', 'jshint','webserver']);