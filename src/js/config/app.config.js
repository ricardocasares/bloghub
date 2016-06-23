import authInterceptor from './auth.interceptor';

// @ngInject
export default function AppConfig(
  $httpProvider,
  $stateProvider,
  $locationProvider,
  $urlRouterProvider,
  $compileProvider,
  cfpLoadingBarProvider,
  AppConstants
) {
  // Push our interceptor for auth
  $httpProvider.interceptors.push(authInterceptor);
  
  // enable or disable debug info
  $compileProvider.debugInfoEnabled(AppConstants.debug);
  
  // loading bar config
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 300;
  
  // @TODO No hashbang routing
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    resolve:{
      auth: function(User) {
        return User.verifyAuth();
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}
