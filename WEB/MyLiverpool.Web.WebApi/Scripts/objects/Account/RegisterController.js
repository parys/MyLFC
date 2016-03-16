var RegisterController = function ($scope, AccountFactory, Authentication, ValidationService, $state) {
    $scope.registerForm = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        birthday: ''
    };

    $scope.registred = false;

    $scope.register = function () {
        if (new ValidationService().checkFormValidity($scope.registerForm)) {
            AccountFactory.register($scope.registerForm)
                .then(function() {
                   // Authentication.login($scope.registerForm);
                    // $state.go('home');
                    $scope.registred = true;
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