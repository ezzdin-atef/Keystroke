var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var livereload = require('gulp-livereload');
var notify = require("gulp-notify");

// HTML Files
gulp.task('html', function() {
  return gulp.src('project/index.pug')
              .pipe(pug({pretty: true}))
              .pipe(gulp.dest('dist'))
              .pipe(notify("HTML Task Completed"))
              .pipe(livereload());
});

// CSS Files
gulp.task('css', function() {
  return gulp.src('project/scss/main.scss')
              .pipe(sass())
              .pipe(autoprefixer('last 2 version'))
              .pipe(concat('main.css'))
              .pipe(gulp.dest('dist/css'))
              .pipe(notify("CSS & SASS Task Completed"))
              .pipe(livereload());
});

// Watch task
gulp.task('watch', function () {
  require('./server.js');
  livereload.listen();
  gulp.watch('project/**/*.pug', gulp.series('html'));
  gulp.watch('project/**/*.scss', gulp.series('css'));
});
