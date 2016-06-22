'use strict';

const gulp = require('gulp');
const template = require('gulp-template');
const rename = require('gulp-rename');

module.exports = (opts) => gulp
    .src(opts.src)
    .pipe(rename(opts.output))
    .pipe(template(opts.data))
    .pipe(gulp.dest(opts.dest));