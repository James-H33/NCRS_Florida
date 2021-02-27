const { series, watch, dest, src } = require('gulp');
const sass         = require('gulp-sass');
const uglify       = require('gulp-uglify');
const babel        = require('gulp-babel');
const imagemin     = require('gulp-imagemin');
const plumber      = require('gulp-plumber');
const browserSync  = require('browser-sync');

function doSass(cb) {
  src('./src/sass/main.sass')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(plumber())
    .pipe(dest('./public/css/'))
    .pipe(browserSync.reload({stream: true}));

  cb();
}

function doScripts(cb) {
  src('./src/js/functions.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('./public/js/'))
    .pipe(browserSync.reload({stream: true}));

  cb();
}

function doImgs() {
  return src('./src/imgs/*')
    .pipe(imagemin())
    .pipe(dest('./public/imgs/'));
}

function doBrowserSync(cb) {

  browserSync.init( null, {
    proxy: 'http://localhost:5000',
    files: ['view/index.pug'],
    browser: 'google chrome',
    port: 7000
  });

  watch('./src/sass/**/*.sass', doSass);
  watch('./src/js/*.js', doScripts);
  watch('./**/*.pug').on('change', browserSync.reload);

  cb();
}

exports.build = series(doSass, doScripts, doImgs);
exports.styles = series(doSass);
exports.watch = series(doBrowserSync)
