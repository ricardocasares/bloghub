// @ngInject
export default function SettingsConfig($stateProvider) {
  $stateProvider
  .state('app.settings', {
    url: '/settings',
    controller: 'SettingsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'settings/settings.html',
    title: 'Settings',
    resolve:{
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });

};
