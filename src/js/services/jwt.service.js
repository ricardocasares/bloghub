export default class JWT {
  // @ngInject
  constructor(CONFIG, $window) {
    this._config = CONFIG;
    this._$window = $window;
  }

  parse(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(this._$window.atob(base64));
  }

  exists() {
    let token = this.get();
    return !!token;
  }

  save(token) {
    this._$window.localStorage[this._config.jwtKey] = token;
  }

  get() {
    return this._$window.localStorage[this._config.jwtKey];
  }

  destroy() {
    this._$window.localStorage.removeItem(this._config.jwtKey);
  }


}
