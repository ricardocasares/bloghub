'use strict';

const gulp = require('gulp');

module.exports = (opts) => gulp
    .src(opts.src)
    .pipe(gulp.dest(opts.dest));