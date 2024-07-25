const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function transformacaoHTML() {
    return gulp.src('src/index.html')
        .pipe(uglifycss({ "uglyComments": true }))
        .on('error', err => console.log(err))
        .pipe(concat('index.min.html'))
        .pipe(gulp.dest('build/html'))
}

exports.default = parallel(transformacaoCSS, transformacaoHTML)