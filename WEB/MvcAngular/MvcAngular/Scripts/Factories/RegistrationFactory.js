var RegistrationFactory = function($http, $q) {
    return function(emailAddress, password, confirmPassword) {
        var defferedObject = $q.defer();

        $http.post(
                '/Account/Register', {
                    Email: emailAddress,
                    Password: password,
                    ConfirmPassword: confirmPassword
                }
            ).
            success(function(data) {
                if (data == "True") {
                    defferedObject.resolve({ success: true });
                } else {
                    defferedObject.resolve({ success: false });
                }
            }).
            error(function() {
                defferedObject.resolve({ success: false });
            });

        return defferedObject.promise;
    }
}

RegistrationFactory.$inject = ['$http', '$q'];