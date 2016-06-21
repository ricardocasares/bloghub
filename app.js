'use strict';

angular
	.module('bloghub', ['ngSanitize', 'hc.marked'])
	.config(['markedProvider', function(markedProvider) {
		markedProvider.setOptions({
			gfm: true,
			highlight: function(code, lang) {
				if (lang) {
					return hljs.highlight(lang, code, true).value;
				} else {
					return hljs.highlightAuto(code).value;
				}
			}
		});
	}])
	.constant('APP', {
		api: 'https://api.github.com',
	})
	.service('github', ['APP', '$http', function(APP, $http) {
		return {
			issues: function() {
				return $http.get(APP.api + '/repos/ricardocasares/ricardocasares.github.io/issues');
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