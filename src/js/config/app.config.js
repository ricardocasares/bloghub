import authInterceptor from './auth.interceptor';

// @ngInject
export default function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  // Push our interceptor for auth
  $httpProvider.interceptors.push(authInterceptor);

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

export default AppConfig;
