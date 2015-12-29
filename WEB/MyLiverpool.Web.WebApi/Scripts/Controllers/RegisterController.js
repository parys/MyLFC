//var RegisterController = function ($scope, $location, RegistrationFactory) {
//    $scope.registerForm = {
//        userName: '',
//        emailAddress: '',
//        password: '',
//        confirmPassword: '',
//        fullName: '',
//        birthDayDate: '',
//        registrationFailure: false
//    };

//    $scope.register = function () {
//        var result = RegistrationFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.confirmPassword);
//        result.then(function (result) {
//            if (result.success) {
//                $location.path('/home');
//            } else {
//                $scope.registerForm.registrationFailure = true;
//            }
//        });
//    }
//}

//RegisterController.$inject = ['$scope', '$location', 'RegistrationFactory'];

var RegisterController = function ($scope, LoginFactory, RegisterFactory, SessionService) {
    $scope.registerForm = {
        username: undefined,
        password: undefined,
        confirmPassword: undefined,
        errorMessage: undefined
    };

    $scope.register = function () {
        RegisterFactory($scope.registerForm.username, $scope.registerForm.password, $scope.registerForm.confirmPassword)
        .then(function () {
            LoginFactory($scope.registerForm.username, $scope.registerForm.password)
            .then(function (response) {
                SessionService.setToken(response.access_token);
                SessionService.setUserId(response.id);
            }, function (response) {
                $scope.registerForm.errorMessage = response;
            });
        }, function (response) {
            $scope.registerForm.errorMessage = response;
        });
    }
}
RegisterController.$inject = ['$scope', 'LoginFactory', 'RegisterFactory', 'SessionService'];