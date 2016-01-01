var PmsFactory = function($q, $http, SessionService) {

    var authenticatedUser = null;
    var cookieName = 'abra-kadabra';

    //  var params = { grant_type: "password", userName: 'admin', password: '123456' }; //todo

    return {
        getMessage: function(id) {
            var result = $q.defer();

            $http({
                method: 'GET',
                url: SessionService.apiUrl + '/api/User/Pm?id='+ id,
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
        getMessages: function() {
            var result = $q.defer();

            $http({
                method: 'GET',
                url: SessionService.apiUrl + '/api/User/Pms', //?id='+ id,
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
};

PmsFactory.$inject = ['$q', '$http', 'SessionService']