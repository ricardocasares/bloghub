export default class GitHub {
	// @ngInject
	constructor($http, CONFIG) {
		this._$http = $http;
		this._endpoint = CONFIG.endpoint;
	}

	query(method = 'GET') {
		return this._$http({
			url: this._config.endpoint,
			method: method
		});
	}
}