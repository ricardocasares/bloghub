export default class HomeCtrl {
  // @ngInject
  constructor(User, tags, CONFIG, $scope) {
    this.appName = CONFIG.appName;
    this._$scope = $scope;
    this.tags = tags;
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };
  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }
}
