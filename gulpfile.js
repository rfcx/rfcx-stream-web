var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    less      = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename');

var paths = {
  lessAllFiles: './src/less/**/*.less',
  lessGeneralFiles: './src/less/*.less',
  cssAllFiles: './public/css/*.css',
  cssDestPath: './public/css',
  cssMinDest: './public/css/min',
  cssGeneratedFiles: './public/css/*.css'
};

// minifies required css files with ".min" suffix
gulp.task('minify-css', function() {
  return gulp.src(paths.cssGeneratedFiles)
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.cssMinDest));
});

// watches for changes in files (currently for *.less)
gulp.task('watch', function() {
  gulp.watch(paths.lessAllFiles, ['less']);
});

gulp.task('connect', function() {
  connect.server();
});

// generates css files from less
gulp.task('less', function () {
  return gulp.src(paths.lessGeneralFiles)
    .pipe(less())
    .pipe(gulp.dest(paths.cssDestPath));
});

gulp.task('default', ['less', 'connect', 'watch']);
gulp.task('production', ['minify-css']);