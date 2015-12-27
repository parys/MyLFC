//var RegistrationFactory = function($http, $q) {
//    return function(emailAddress, password, confirmPassword) {
//        var defferedObject = $q.defer();

//        $http.post(
//                '/Account/Register', {
//                    Email: emailAddress,
//                    Password: password,
//                    ConfirmPassword: confirmPassword
//                }
//            ).
//            success(function(data) {
//                if (data == "True") {
//                    defferedObject.resolve({ success: true });
//                } else {
//                    defferedObject.resolve({ success: false });
//                }
//            }).
//            error(function() {
//                defferedObject.resolve({ success: false });
//            });

//        return defferedObject.promise;
//    }
//}

//RegistrationFactory.$inject = ['$http', '$q'];

var RegisterFactory = function ($http, $q, SessionService) {
    return function (email, password, confirmPassword) {
        var result = $q.defer();

        $http({
            method: 'POST',
            url: SessionService.apiUrl + '/api/Account/register',
            data: { Email: email, Password: password, ConfirmPassword: confirmPassword },
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

RegisterFactory.$inject = ['$http', '$q', 'SessionService'];