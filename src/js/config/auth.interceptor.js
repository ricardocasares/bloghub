// @ngInject
export default function authInterceptor(JWT, AppConstants, $window, $q) {
  return {
    // automatically attach Authorization header
    request: function(config) {
      if(config.url.indexOf('issues') > 0) {
        config.params.access_token = AppConstants.access_token
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
