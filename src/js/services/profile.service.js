export default class Profile {
  // @ngInject
  constructor(CONFIG, $http) {
    this._config = CONFIG;
    this._$http = $http;
  }

  get(username) {
    return this._$http({
      url: this._config.api + '/profiles/' + username,
      method: 'GET'
    }).then((res) => res.data.profile);
  }

  follow(username) {
    return this._$http({
      url: this._config.api + '/profiles/' + username + '/follow',
      method: 'POST'
    }).then((res) => res.data);
  }

  unfollow(username) {
    return this._$http({
      url: this._config.api + '/profiles/' + username + '/follow',
      method: 'DELETE'
    }).then((res) => res.data);
  }
}
