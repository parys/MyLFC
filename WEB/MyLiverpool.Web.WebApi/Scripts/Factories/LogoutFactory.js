var LogoutFactory = function ($http, $q, SessionService) {
    return function () {
        SessionService.setToken('');
    }
}

LoginFactory.$inject = ['$http', '$q', 'SessionService'];