var GetForumSubsectionFactory = function ($http, $q, $stateParams, SessionService) {
    return function () {
        var result = $q.defer();

        $http({
            method: 'GET',
            url: SessionService.apiUrl + '/api/Forum/subsection?id=' + $stateParams.id + '&page=' + $stateParams.page,
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

GetForumSubsectionFactory.$inject = ['$http', '$q', '$stateParams', 'SessionService'];