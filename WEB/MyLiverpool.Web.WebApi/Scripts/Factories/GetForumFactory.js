var GetForumFactory = function ($http, $q, SessionService) {
    return function () {
        var result = $q.defer();

        $http({
            method: 'GET',
            url: SessionService.apiUrl + '/api/Forum',
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

GetForumFactory.$inject = ['$http', '$q', 'SessionService'];