'use strict'
// Browser Sync
var gulp = require('gulp'),
    sass = require('gulp-sass'),                    // Компилятор SASS в CSS
    autoprefixer = require('gulp-autoprefixer'),    // Добавление префиксов CSS
    minifyCSS = require('gulp-csso'),               // Минификация CSS
    watch = require('gulp-watch'),                  // Наблюдение за файлами
    svgSprite = require('gulp-svg-sprite'),         // Создание карты спрайтов svg
    imagemin = require('gulp-imagemin'),            // Сжатие изображений
    fileInclude = require('gulp-file-include'),     // Include HTML файлов с передачей параметров
    browserSync = require('browser-sync').create(), // Автообновление браузера
    plumber = require('gulp-plumber'),              // 
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),                
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    concatCss = require('gulp-concat-css'),
    stripCssComments = require('gulp-strip-css-comments'),
	replace = require('gulp-replace'),
    minify = require('gulp-minify'),
    strip_comments = require('gulp-strip-json-comments'),
    htmlbeautify = require('gulp-html-beautify'),
    data = require('./src/data.json'),
    sourcemaps = require('gulp-sourcemaps');

    var assets = {
        sass:       'src/scss/*.scss',
        svg:        'src/svg/*.svg',
        images:     'src/images/**/*',
        html:       'src/html/*.html',
        js:         'src/js/**/*.js',
        fonst:      'src/fonts/*.{ttf, otf}'
    }

/*
*   1. Компиляция sass
*   2. Минификация css
*   3. Добавление префиксов
*/
function css() {
    return gulp.src(assets.sass)
            .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
            .pipe(sass().on('error', function(error) {
                console.log(error)
            }))
            .pipe(strip_comments())
            .pipe(minifyCSS())
            .pipe(autoprefixer({browsers: ['> 2% in RU', 'last 4 version', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
            .pipe(gulp.dest('dist/css'))
            .on('end', browserSync.reload)
}

function cssLandings() {
    return gulp.src('src/scss/landings/**/*.scss')
            .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
                    .pipe(sass().on('error', function(error) {
                        console.log(error)
                    }))
                    .pipe(strip_comments())
                    .pipe(minifyCSS())
                    .pipe(autoprefixer({browsers: ['> 2% in RU', 'last 4 version', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
                    .pipe(gulp.dest('dist/css/landings'))
                    .on('end', browserSync.reload)
}

/*
*   1. Создание карты спрайтов
*/
function svgMap() {
    return gulp.src(assets.svg)
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe(cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                    $('[clip-path]').removeAttr('clip-path');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe(replace('&gt;', '>'))
            .pipe(svgSprite({
                mode: {
                    symbol: {
                        dest: '', 
                        sprite: 'sprites.svg', 
                        example: true, 
                        render: {
                            scss: {
                                dest: "./sprite.scss"
                            }
                        }
                    }
                }
            }))
            .pipe(gulp.dest('img/svg'))
}

/*
*   1. Сжатие изображений
*/
function imageMinify() {
    return gulp.src(assets.images)
                .pipe(imagemin())
                .pipe(gulp.dest('img'))
                .on('end', browserSync.reload)
}

/*
*   1. Рендер HTML
*/
function html() {
    return gulp.src(assets.html)
                .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
                .pipe(fileInclude({
                    context: data 
                }))
                .pipe(htmlbeautify())
                .pipe(gulp.dest('./'))
                .on('end', browserSync.reload)
}

function js() {
    return gulp.src(assets.js)
                .pipe(sourcemaps.init())
                .pipe(concat('main.js'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('dist/js'))
                .on('end', browserSync.reload)
}

/*
*   1. browserSync
*/
function browser_sync() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    browserSync.watch('./', browserSync.reload)
}

function createBundleCss() {
    return gulp.src(['./dist/css/*.css', '!./dist/css/style.min.css'])
            .pipe(concatCss('style.min.css'))
            .pipe(minifyCSS())
            .pipe(stripCssComments())
            .pipe(gulp.dest('dist/css'))
            .on('end', browserSync.reload)
}

function createBundleJs() {
    return gulp.src([
                './dist/js/jquery.visible.min.js',
                './dist/js/prefixfree.dynamic-dom.min.js',
                './dist/js/anime.min.js',
                './dist/js/jquery.fancybox.min.js',
                './dist/js/svg4everybody.min.js',
                './dist/js/slick.min.js',
                './dist/js/validator.min.js',
                './dist/js/vivus.min.js',
                './dist/js/jquery.modal.min.js',
                './dist/js/skrollr.min.js',
                './dist/js/main.js'
            ])
            .pipe(sourcemaps.init())
            .pipe(concat('bundle.js'))
            // .pipe(minify())
            .pipe(gulp.dest('dist/js'))
            .on('end', browserSync.reload)
}

gulp.task('css', css)
gulp.task('cssLandings', cssLandings)
gulp.task('svgMap', svgMap)
gulp.task('imageMinify', imageMinify)
gulp.task('html', html)
gulp.task('js', js)
gulp.task('createBundleJs', createBundleJs)
gulp.task('createBundleCss', createBundleCss)
gulp.task('browser_sync', browser_sync)

gulp.task('build', function() {
    gulp.watch('src/html/**/*.html', gulp.series('html'))
    gulp.watch('src/scss/**/*.scss', gulp.series('css'))
    gulp.watch('src/scss/**/*.scss', gulp.series('cssLandings'))
    gulp.watch(assets.js, gulp.series('js'))
    gulp.watch('dist/js/main.js', gulp.series('createBundleJs'))
    // gulp.watch('dist/css/style.css', gulp.series('createBundleCss'))
    gulp.watch(assets.svg, gulp.series('svgMap'))
    gulp.watch(assets.images, gulp.series('imageMinify'))
})

gulp.task('default', gulp.series(
    // gulp.parallel('html', 'css', 'cssLandings', 'js', 'svgMap', 'imageMinify'),
    gulp.parallel('html', 'css', 'cssLandings', 'js', 'createBundleJs', 'svgMap', 'imageMinify'),
    gulp.parallel('build', 'browser_sync')
))