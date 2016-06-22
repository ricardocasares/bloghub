// @ngInject
export default function HomeConfig($stateProvider) {
  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home'
  });
};
