'use strict';

const gulp = require('gulp');
const seq = require('run-sequence');
const opts = require('./gulp.config');
const server = require('browser-sync');
const assign = Object.assign;

let common = ['clean' , 'sass', 'html', 'config', 'templates', 'bundle:vendor'];

gulp.task('sass', () => require('./tasks/sass')(opts.sass));
gulp.task('html', () => require('./tasks/copy')(opts.copy));
gulp.task('clean', () => require('./tasks/clean')(opts.clean));
gulp.task('config', () => require('./tasks/config')(opts.config));
gulp.task('templates', () => require('./tasks/templates')(opts.templates));
gulp.task('optimize', () => require('./tasks/optimize')(opts.optimize));

gulp.task('boot', cb => seq.apply(this, common.concat(['bundle:src:watch', cb])));
gulp.task('build', cb => seq.apply(this, common.concat(['optimize', 'bundle:src', cb])));

gulp.task('bundle:src:watch', () => require('./tasks/compile')(opts.compile));
gulp.task('bundle:vendor', () => require('./tasks/compile')(assign({}, opts.compile, opts.vendor)));
gulp.task('bundle:src', () => require('./tasks/compile')(assign({}, opts.compile, opts.build)));

gulp.task('serve', ['boot'], () => {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/js/**/*.html', ['templates']);
  
  server.create().init(opts.server);
});