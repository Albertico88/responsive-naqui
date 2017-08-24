var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./docs/scss/main.scss')
    .pipe(sass({includedPaths: ['scss']}))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('serve', function() {
  browserSync.init(['./docs/css/*.css'], {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('default', ['sass', 'serve'], function() {
  gulp.watch('./docs/scss/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});
