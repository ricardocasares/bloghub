'use strict';

const gulp = require('gulp');
const purify = require('gulp-purifycss');
const minify = require('gulp-minify-css');

module.exports = (opts) => gulp
    .src(opts.target)
    .pipe(purify(opts.src))
    .pipe(minify())
    .pipe(gulp.dest(opts.dest));