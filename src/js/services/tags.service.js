export default class Tags {
  // @ngInject
  constructor(JWT, AppConstants, $http, $q) {
    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  getAll() {
    return this._$http({
      url: 'https://api.github.com/repos/ricardocasares/ricardocasares.github.io/labels',
      method: 'GET',
    }).then((res) => res.data);
  }
}
