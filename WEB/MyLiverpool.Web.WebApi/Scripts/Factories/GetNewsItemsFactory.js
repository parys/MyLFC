var GetNewsItemsFactory = function ($http, $q, $stateParams, SessionService) {
    return function () {
        var result = $q.defer();

        $http({
            method: 'GET',
            url: SessionService.apiUrl + '/api/News/List?page=' + $stateParams.page + '&categoryId=' + $stateParams.categoryId,
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

GetNewsItemsFactory.$inject = ['$http', '$q', '$stateParams', 'SessionService'];