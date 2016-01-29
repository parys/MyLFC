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

        $scope.open = function () {
            console.log('opened');
            $scope.status.opened = true;
        };

        $scope.status = {
            opened: true
        };

        $scope.dateOptions = {
            formatYear: 'yyyy',
            startingDay: 1
        };


    }
}
RegisterController.$inject = ['$scope', 'AccountFactory', 'Authentication', 'validationService', 'SessionService'];