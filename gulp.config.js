'use strict';

const key = Object.keys;
const pkg = require('./package.json');
const ban = ['conduit-sass'];
const deps = key(pkg.dependencies).filter(n => ban.indexOf(n));

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
    external: deps,
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
  build: {
    plugins: [
      {
        name: 'minifyify',
        options: {
          map: 'bundle.js.map',
          output: 'build/bundle.js.map'
        }
      }
    ]
  },
  vendor: {
    entries: [],
    output: 'vendor.js',
    external: [],
    require: deps,
    plugins: [
      {
        name: 'minifyify',
        options: {
          map: 'vendor.js.map',
          output: 'build/vendor.js.map'
        }
      }
    ]
  },
  copy: {
      src: 'src/index.html',
      dest: 'build',
  },
  optimize: {
    src: [
      'src/**/*.html',
      'node_modules/angular-loading-bar/index.js'
    ],
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
    server: {
      baseDir: 'build',
      middleware: [require('compression')()]
    }
  },
  templates: {
    src: 'src/js/**/*.html',
    dest: 'src/js/config',
    file: 'app.templates.js',
    templates: {
        standalone: true,
        templateHeader: 'export default angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {'
    }
  },
  config: {
    src: 'src/js/config/app.constants.tpl.js',
    dest: 'src/js/config',
    output: 'app.constants.js',
    data: require('./config.js')
  }
};
