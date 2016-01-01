var LoginFactory = function ($http, $q, SessionService) {
    return function (credentials) {
        var result = $q.defer();

        var params = { grant_type: "password", userName: credentials.username, password: credentials.password };

        $http({
            method: 'POST',
            url: SessionService.apiUrl + '/token',
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: params,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
        })
        .success(function (response) {
            result.resolve(response);
        })
        .error(function (response) {
            result.reject(response);
        });

        return result.promise;
    }
}

LoginFactory.$inject = ['$http', '$q', 'SessionService'];