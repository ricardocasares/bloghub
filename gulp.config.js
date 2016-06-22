'use strict';

module.exports = {
  clean: {
    target: [
      'build',
      'src/js/config/app.constants.js',
    ]
  },
  compile: {
    entries: ['src/js/app.js'],
    output: 'bundle.js',
    dest: 'build',
    cache: {},
    debug: true,
    packageCache: {},
    plugins: [
      {
        name: 'watchify',
        options: {}
      },
      {
        name: 'minifyify',
        options: {
          map: 'bundle.js.map',
          output: 'build/bundle.js.map'
        }
      }
    ],
    babelify: {
      presets: ['es2015']
    }
  },
  copy: {
      src: 'src/index.html',
      dest: 'build',
  },
  optimize: {
    src: ['src/**/*.html'],
    dest: 'build',
    target: 'build/main.css'
  },
  sass: {
    src: 'src/sass/main.scss',
    dest: 'build',
    sass: {}
  },
  server: {
    open: false,
    files: ['./build/**/**.**'],
    reloadDelay: 0,
    server: 'build',
    port: 4000,
    ui: {
        port: 4001
    }
  },
  templates: {
    src: 'src/js/**/*.html',
    dest: 'src/js/config',
    file: 'app.templates.js',
    templates: {
        standalone: true
    }
  },
  config: {
    src: 'src/js/config/app.constants.tpl.js',
    dest: 'src/js/config',
    output: 'app.constants.js',
    data: require('./config.js')
  }
};
