var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var del = require('del');

var postCSSArray = [
  require('postcss-import')(),
  require('postcss-url')(),
  require('postcss-nested')(),
  require('postcss-cssnext')(),
  require('postcss-reporter')(),
  require('cssnano')({autoprefixer: false})
];

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('postcss', ['clean'], function () {
  return gulp.src('lib/tooltip.css')
    .pipe(postcss(postCSSArray))
    .pipe(rename({
      prefix: 'funkcss-',
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
  gulp.watch('lib/*.css', ['postcss']);
});

gulp.task('default', ['postcss'] )
