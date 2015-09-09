'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  return gulp.src('test/test.js')
            .pipe(mocha({ reporter: "spec" }));
});
