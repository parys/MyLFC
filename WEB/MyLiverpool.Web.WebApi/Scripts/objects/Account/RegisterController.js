var RegisterController = function ($scope, AccountFactory, Authentication, ValidationService, $state) {
    $scope.registerForm = {
        userName: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
        fullName: undefined,
        birthday: undefined
    };

    $scope.register = function () {
        if (new ValidationService().checkFormValidity($scope)) {
            AccountFactory.register($scope.registerForm)
                .then(function() {
                    Authentication.login($scope.registerForm);
                    $state.go('home');
                });
        }
    }
    $scope.open = function () {
        $scope.status.opened = true;
    };

    $scope.status = {
        opened: false
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };
}
RegisterController.$inject = ['$scope', 'AccountFactory', 'Authentication', 'ValidationService', '$state'];