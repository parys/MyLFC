var ImagesFactory = function($q, $http, SessionService) {

    return {
        getSections: function() {
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
        },
    }
};

ImagesFactory.$inject = ['$q', '$http', 'SessionService']