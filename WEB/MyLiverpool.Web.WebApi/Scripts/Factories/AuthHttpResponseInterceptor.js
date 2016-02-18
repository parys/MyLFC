var AuthHttpResponseInterceptor = function ($q, $location, $injector, SessionService) {
    return {
        request: function (config) {
            config.headers['Authorization'] = 'Bearer ' + SessionService.getToken();
            return config;
        },
        response: function(response) {
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function(rejection) {
            if (rejection.status === 401) {
             //   $injector.get('$state').go('login', { returnUrl: $location.path() });
             //todo redirect to ??
            }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location', '$injector', 'SessionService'];