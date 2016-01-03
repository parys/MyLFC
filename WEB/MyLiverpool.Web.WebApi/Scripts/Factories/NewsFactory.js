var NewsFactory = function($q, $http, SessionService, $stateParams) {

    return {
        getList: function() {
            var result = $q.defer();

            $http({
                method: 'GET',
                url: SessionService.apiUrl + '/api/News/List?page=' + $stateParams.page + '&categoryId=' + $stateParams.categoryId,
                headers: { 'Content-Type': 'application/json' }
            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });

            return result.promise;
        },
        getItem: function() {
            var result = $q.defer();

            $http({
                method: 'GET',
                url: SessionService.apiUrl + '/api/News/Info?id=' + $stateParams.id,
                headers: { 'Content-Type': 'application/json' }
            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });

            return result.promise;
        },
        delete: function(id) {
            var result = $q.defer();

            $http({
                method: 'DELETE',
                url: SessionService.apiUrl + '/api/News/delete?id=' + id,
                headers: { 'Content-Type': 'application/json' }
            })
            .success(function (response) {
                result.resolve(response);
            })
            .error(function (response) {
                result.reject(response);
            });

            return result.promise;
        },
        activate: function(id) {
            var result = $q.defer();

            $http({
                    method: 'PUT',
                    url: SessionService.apiUrl + '/api/News/activate?id=' + id,
                    headers: { 'Content-Type': 'application/json' }
                })
                .success(function(response) {
                    result.resolve(response);
                })
                .error(function(response) {
                    result.reject(response);
                });

            return result.promise;
        }


    }
};

NewsFactory.$inject = ['$q', '$http', 'SessionService', '$stateParams']