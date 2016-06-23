import angular from 'angular';
import animate from 'angular-animate';
import router from 'angular-ui-router';
import loading from 'angular-loading-bar';

// modules
import article from './article';
import auth from './auth';
import components from './components';
import editor from './editor';
import home from './home';
import layout from './layout';
import profile from './profile';
import services from './services';
import settings from './settings';
import templates from './config/app.templates';

// configuration
import appConfig from './config/app.config';
import appRun from './config/app.run';
import appConstants from './config/app.constants';

// dependencies
const deps = [
  router,
  loading,
  animate,
  layout.name,
  components.name,
  home.name,
  profile.name,
  article.name,
  editor.name,
  auth.name,
  services.name,
  settings.name,
  templates.name,
];

angular
  .module('app', deps)
  .constant('AppConstants', appConstants)
  .config(appConfig)
  .run(appRun);

angular
  .bootstrap(document, ['app'], {
    strictDi: true
  });
