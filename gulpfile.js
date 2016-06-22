'use strict';

const gulp = require('gulp');
const seq = require('run-sequence');
const opts = require('./gulp.config');
const server = require('browser-sync');

gulp.task('styles', cb => seq('sass', 'optimize', cb));
gulp.task('sass', () => require('./tasks/sass')(opts.sass));
gulp.task('html', () => require('./tasks/copy')(opts.copy));
gulp.task('clean', () => require('./tasks/clean')(opts.clean));
gulp.task('clean:constants', () => require('./tasks/clean')({target: 'src/js/config/app.constants.js'}));
gulp.task('config', () => require('./tasks/config')(opts.config));
gulp.task('templates', () => require('./tasks/templates')(opts.templates));
gulp.task('compile', () => require('./tasks/compile')(opts.compile));
gulp.task('optimize', () => require('./tasks/optimize')(opts.optimize));
gulp.task('boot', cb => seq('clean', 'styles', 'html', 'config', 'templates', 'compile', cb));

gulp.task('default', ['boot'], () => {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/js/**/*.html', ['templates']);
  
  server.create().init(opts.server);
});
