var gulp = require('gulp');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src(['./static/css/basscss.css','./static/css/style.css'])
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./static/css/*.css', ['css']);
});

