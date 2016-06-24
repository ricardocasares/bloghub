// @ngInject
export default function HomeConfig($stateProvider) {
  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      tags: function(Tags, Comments) {
        return Tags.getAll();
      }
    }
  });
};
