var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  bower = require('gulp-bower');
  concat = require('gulp-concat');
  customLodash = require('gulp-lodash-custom');

gulp.task('bower', function() {
  return bower();
});

gulp.task('app-build', ['bower'], function() {
  gulp.src('opentok-angular.js')
    .pipe(jshint())
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename('opentok-angular.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('add-lodash', function () {
  gulp.src('opentok-angular.js')
      .pipe(customLodash({}))
});

gulp.task('build', ['add-lodash'], function(){
    gulp.src(['lodash-custom.min.js', 'opentok-angular.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./'));
});
