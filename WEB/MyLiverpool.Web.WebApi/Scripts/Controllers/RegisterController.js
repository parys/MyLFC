var RegisterController = function ($scope, AccountFactory, Authentication, validationService, SessionService) {
    $scope.registerForm = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        birthday: '',
        registrationFailure: false
    };

    $scope.register = function () {
        if (new validationService().checkFormValidity($scope)) {
            AccountFactory.register($scope.registerForm)
                .then(function() {
                    Authentication.login($scope.registerForm);
                });
        }

        //$scope.emailValidation = function () {
        //    return AccountFactory.isEmailUnique($scope.registerForm.email);
        //}

        // LoginFactory($scope.registerForm.username, $scope.registerForm.password)
            //  .then(function (response) {
            //    SessionService.setToken(response.access_token);
            //    SessionService.setUserId(response.id);

            //  }, function (response) {
            //      $scope.registerForm.errorMessage = response;
            //  });
            //  }, function (response) {
            //     $scope.registerForm.errorMessage = response;
        
    }
}
RegisterController.$inject = ['$scope', 'AccountFactory', 'Authentication', 'validationService', 'SessionService'];