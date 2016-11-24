var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    less      = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename'),
    jade      = require('gulp-jade'),
    del       = require('del'),
    concat    = require('gulp-concat'),
    minify    = require('gulp-minify');

var paths = {
  lessAllFiles: './src/less/**/*.less',
  lessGeneralFiles: './src/less/*.less',
  cssAllFiles: './public/css/*.css',
  cssDestPath: './public/css',
  jadeAllFiles: './src/jade/**/*.jade',
  jsAllFiles: './src/js/**/*.js'
};

// generates css files from less
// create normal and minified versions of css files
gulp.task('less', function () {
  return gulp.src(paths.lessGeneralFiles)
    .pipe(less())
    .pipe(gulp.dest(paths.cssDestPath))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.cssDestPath));
});

// watches for changes in files (currently for *.less)
gulp.task('watch', function() {
  gulp.watch(paths.lessAllFiles, ['less']);
  gulp.watch(paths.jadeAllFiles, ['jade']);
  gulp.watch(paths.jsAllFiles, ['scripts']);
});

// create node server to open page locally
gulp.task('connect', function() {
  connect.server({
    port: process.env.PORT || 8083
  });
});

// remove index.html and index.dev.html before converting jade to these files
gulp.task('clean:html', function() {
  return del([
    './index.html',
    './index.dev.html'
  ]);
});

// create index.dev.html (pretty and with non-minified js files) file from jade source
gulp.task('jade:dev', function() {
  var opts = {
    html_suffix: '.dev',
    pretty: true,
    locals: {
      suffix: ''
    }
  };
  convertIndexJade(opts);
});

// create index.html (minified html, js and css files) file from jade source
gulp.task('jade:prod', function() {
  var opts = {
    html_suffix: '',
    pretty: false,
    locals: {
      suffix: '.min'
    }
  };
  convertIndexJade(opts);
});

// method to convert jade to html with given options
function convertIndexJade(opts) {
  gulp.src('./src/jade/index.jade')
    .pipe(jade({
      locals: opts.locals,
      pretty: opts.pretty
    }))
    .pipe(rename({suffix: opts.html_suffix}))
    .pipe(gulp.dest('./'))
}

// concat js files into one file
// create normal and minified versions of js file
gulp.task('scripts', function() {
  return gulp.src([
    './src/js/lib/jquery-2.1.4.min.js',
    './src/js/lib/moment.js',
    './src/js/lib/moment-timezone-with-data-2010-2020.js',
    './src/js/lib/kenburns.js',
    './src/js/lib/pageguide.js',
    './src/js/lib/webgl/events.js',
    './src/js/lib/webgl/base.js',
    './src/js/lib/webgl/cameracontroller.js',
    './src/js/lib/webgl/matrix4x4.js',
    './src/js/lib/webgl/visualizer.js',
    './src/js/lib/webgl/shader.js',
    './config/config.js',
    './src/js/common.js',
    './src/js/visualiser.js',
    './src/js/menu.js',
    './src/js/login.js',
    './src/js/slideshow.js',
    './src/js/queue.js',
    './src/js/audio.js',
    './src/js/clock.js',
    './src/js/tour.js',
    './src/js/analytics.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(minify({
      ext:{
        min:'.min.js'
      }
    }))
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('jade', ['clean:html', 'jade:dev', 'jade:prod']);
gulp.task('default', ['less', 'jade', 'scripts', 'connect', 'watch']);
