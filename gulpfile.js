var gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  bower = require('gulp-bower'),
  concat = require('gulp-concat'),
  insert = require('gulp-insert'),
  customLodash = require('gulp-lodash-custom')
;

gulp.task('bower', function() {
  return bower();
});

gulp.task('prepare-opentok', /*['bower'],*/ function() {
  return gulp.src('src/opentok-angular.js')
    .pipe(insert.prepend('; console.log(lodash); var _ = lodash; '))
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('prepare-lodash', function () {
  const lodashBin = require('lodash-cli/package.json').bin.lodash;
  const lodashCli = require.resolve('lodash-cli/' + lodashBin);

  return gulp.src('opentok-angular.js')
    .pipe(customLodash({
      lodashCli: lodashCli + ' exports=global iife="%output%" ',
      target: ' ./.tmp/lodash-custom.min.js'
    }));
});

gulp.task('default', ['prepare-opentok', 'prepare-lodash'], function(){
  gulp.src(['.tmp/lodash-custom.min.js', '.tmp/opentok-angular.js'])
    .pipe(concat('opentok-angular.js'))
    .pipe(gulp.dest('./'))
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename('opentok-angular.min.js'))
    .pipe(gulp.dest('./'));
});
