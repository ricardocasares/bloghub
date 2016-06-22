'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const templates = require('gulp-angular-templatecache');

module.exports = (opts) => gulp
    .src(opts.src)
    .pipe(templates(opts.file, opts.templates))
    .pipe(gulp.dest(opts.dest));