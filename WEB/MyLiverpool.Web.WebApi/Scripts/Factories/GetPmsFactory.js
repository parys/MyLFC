var GetPmsFactory = function ($http, $q, SessionService) {
    return function (id) {
        var result = $q.defer();

        $http({
            method: 'GET',
            url: SessionService.apiUrl + '/api/User/Pms?id='+ id,
            headers: { 'Content-Type': 'application/json' }
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

GetPmsFactory.$inject = ['$http', '$q', 'SessionService'];