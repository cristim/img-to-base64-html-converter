var gulp = require('gulp');
var img64 = require('gulp-img64');
var iconv = require('gulp-iconv');
var htmltidy = require('gulp-htmltidy');

gulp.task('default', function () {
  gulp.src('*.htm*')
    .pipe(iconv({
      decoding: 'ISO-8859-15',
      encoding: 'utf8'
    }))
    .pipe(htmltidy({
      hideComments: true
    }))
    .pipe(img64())
    .pipe(gulp.dest('output'));
});
