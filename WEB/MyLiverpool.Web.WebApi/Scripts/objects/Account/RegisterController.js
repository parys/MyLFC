var RegisterController = function ($scope, AccountFactory, Authentication, ValidationService, $state) {
    $scope.registerForm = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        birthday: ''
    };

    $scope.register = function () {
        AccountFactory.register($scope.registerForm)
            .then(function () {
                $state.go('emailSent');
            });
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