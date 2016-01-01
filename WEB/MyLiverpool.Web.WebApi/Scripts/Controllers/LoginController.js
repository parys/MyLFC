var LoginController = function ($scope, $state, LoginFactory, SessionService, Authentication) {
    $scope.loginForm = {
        username: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.login = function () {
        //  LoginFactory($scope.loginForm.username, $scope.loginForm.password)
        Authentication.login($scope.loginForm);
        $state.go('home');
        //.then(function (response) {
        // SessionService.setToken(response.access_token);
        // SessionService.setUserId(response.id); todo
        //    $location.path('/');
        // }, function (response) {
        //     $scope.loginForm.errorMessage = response.error_description;
        // });
    }

    $scope.logout = function () {
        Authentication.logout();
        //.then(function () {
          //  SessionService.setToken('');
          //  SessionService.setUserId('');
        $state.go('home');
        //}, function (response) {
        //    $scope.loginForm.errorMessage = response.error_description;
        //});
    }
}
LoginController.$inject = ['$scope', '$state', 'LoginFactory', 'SessionService', 'Authentication'];