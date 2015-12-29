var GetUserFactory = function ($http, $q, SessionService) {
    return function (id) {
        var result = $q.defer();

        $http({
            method: 'GET',
            url: SessionService.apiUrl + '/api/User/Info?id='+ id,
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + SessionService.getToken() }
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

GetUserFactory.$inject = ['$http', '$q', 'SessionService'];