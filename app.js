'use strict';

angular
	.module('bloghub', ['ngSanitize', 'hc.marked'])
	.config(['markedProvider', function(markedProvider) {
		markedProvider.setOptions({gfm: true});
	}])
	.constant('APP', {
		api: 'http://api.github.com',
	})
	.service('github', ['APP', '$http', function(APP, $http) {
		return {
			issues: function() {
				return $http.get(APP.api + '/repos/ricardocasares/grow/issues');
			}
		}
	}])
	.controller('Home', ['github', function(github) {
		var vm = this;
		vm.name = 'Ricardo';
		github.issues().then(function(res) {
			vm.issues = res.data;
		});
	}]);

angular.bootstrap(document.body, ['bloghub']);