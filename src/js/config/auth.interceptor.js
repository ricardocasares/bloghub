// @ngInject
export default function authInterceptor(JWT, CONFIG, $window, $q) {
  return {
    // automatically attach Authorization header
    request: function(config) {
      config.params = config.params || {};
      if (config.url.indexOf('github') > 0) {
        config.params.access_token = CONFIG.token
      }
      return config;
    },

    // Handle 401
    responseError: function(rejection) {
      if (rejection.status === 401) {
        // clear any JWT token being stored
        JWT.destroy();
        // do a hard page refresh
        $window.location.reload();
      }
      return $q.reject(rejection);
    }
  }
}
