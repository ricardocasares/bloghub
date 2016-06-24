export default class Tags {
  // @ngInject
  constructor(JWT, CONFIG, $http, $q) {
    this._config = CONFIG;
    this._$http = $http;
  }

  getAll() {
    return this._$http({
      url: 'https://api.github.com/repos/ricardocasares/ricardocasares.github.io/labels',
      method: 'GET',
    }).then((res) => res.data);
  }
}
