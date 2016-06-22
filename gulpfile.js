'use strict';

const gulp = require('gulp');
const seq = require('run-sequence');
const opts = require('./gulp.config');
const server = require('browser-sync');
const assign = Object.assign;

let common = ['clean' , 'sass', 'html', 'config', 'templates'];

gulp.task('css', cb => seq('sass', 'optimize', cb));
gulp.task('sass', () => require('./tasks/sass')(opts.sass));
gulp.task('html', () => require('./tasks/copy')(opts.copy));
gulp.task('clean', () => require('./tasks/clean')(opts.clean));
gulp.task('config', () => require('./tasks/config')(opts.config));
gulp.task('templates', () => require('./tasks/templates')(opts.templates));
gulp.task('compile:watch', () => require('./tasks/compile')(opts.compile));
gulp.task('optimize', () => require('./tasks/optimize')(opts.optimize));
gulp.task('build', cb => seq.apply(this, common.concat(['compile', cb])));
gulp.task('boot', cb => seq.apply(this, common.concat(['compile:watch', cb])));
gulp.task('compile', () => require('./tasks/compile')(assign({}, opts.compile, opts.build)));

gulp.task('serve', ['boot'], () => {
  gulp.watch('src/**/*.scss', ['css']);
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/js/**/*.html', ['templates']);
  
  server.create().init(opts.server);
});