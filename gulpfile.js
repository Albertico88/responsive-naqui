var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./src/scss/main.scss')
    .pipe(sass({includedPaths: ['scss']}))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('serve', function() {
  browserSync.init(['./src/css/*.css'], {
    server: {
      baseDir: "./src"
    }
  });
});

gulp.task('default', ['sass', 'serve'], function() {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/*.html').on('change', browserSync.reload);
});
