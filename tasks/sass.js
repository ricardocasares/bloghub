'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');

module.exports = (opts) => gulp
    .src(opts.src)
    .pipe(sass(opts.sass).on('error', sass.logError))
    .pipe(gulp.dest(opts.dest));