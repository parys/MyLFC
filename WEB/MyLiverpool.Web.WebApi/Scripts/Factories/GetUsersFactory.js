var GetUsersFactory = function ($http, $q, SessionService) {
    return function (page) {
        var result = $q.defer();

        $http({
            method: 'GET',
            url: SessionService.apiUrl + '/api/User/list?page=' + page,
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

GetUsersFactory.$inject = ['$http', '$q', 'SessionService'];