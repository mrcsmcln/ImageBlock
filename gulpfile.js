var gulp       = require('gulp')
var sass       = require('gulp-sass')
var minifyCss  = require('gulp-minify-css')
var sourcemaps = require('gulp-sourcemaps')
var uglify     = require('gulp-uglify')
var watch      = require('gulp-watch')
var batch      = require('gulp-batch')

gulp.task('default', ['sass', 'js'])

gulp.task('watch', ['sass', 'js'], function() {
  watch('src/js/**/*.js', batch(function(events, done) {
    gulp.start('js', done)
  }))

  watch('src/sass/**/*.scss', batch(function(events, done) {
    gulp.start('sass', done)
  }))
})

gulp.task('sass', function() {
  gulp.src('src/sass/image-blocks.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))

  gulp.src('src/css/image-blocks.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'))
})

gulp.task('js', function() {
  gulp.src('src/js/image-block.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
