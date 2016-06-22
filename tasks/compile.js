'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const log = util.log;
const red = util.colors.red;
const cyan = util.colors.cyan;
const watchify = require('watchify');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const annotate = require('browserify-ngannotate');

module.exports = (opts) => {
    const bundler = browserify(opts)
        .transform(babelify, opts.babelify)
        .transform(annotate);

    opts
        .plugins
        .forEach(p => bundler.plugin(p.name, p.options));

    function bundle() {
        return bundler
            .bundle()
            .on('error', onError)
            .pipe(source(opts.output))
            .pipe(gulp.dest(opts.dest));
    }

    bundler.on('log', finish);
    bundler.on('update', bundle);

    return bundle();
}

function finish(msg) {
    log(cyan('watchify'), msg);
}

function onError(e) {
    log(red(e));
    this.emit('end');
}