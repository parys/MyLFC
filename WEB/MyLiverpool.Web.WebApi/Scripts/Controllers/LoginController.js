//var LoginController = function ($scope, $stateParams, $location, LoginFactory) {
//    $scope.loginForm = {
//        emailAddress: '',
//        password: '',
//        rememberMe: false,
//        returnUrl: $stateParams.returnUrl,

//    };

//    $scope.login = function() {
//        //todo
//    }
//}

//LoginController.$inject = ['$scope', '$routeParams']; var LoginController = function ($scope, $routeParams) {
//    $scope.loginForm = {
//        emailAddress: '',
//        password: '',
//        rememberMe: false,
//        returnUrl: $routeParams.returnUrl
//    };

//    $scope.login = function () {
//        //todo
//    }
//}

//LoginController.$inject = ['$scope', '$stateParams', '$location', 'LoginFactory'];


var LoginController = function ($scope, $location, LoginFactory, LogoutFactory, SessionService) {
    $scope.loginForm = {
        username: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.login = function () {
        LoginFactory($scope.loginForm.username, $scope.loginForm.password)
        .then(function (response) {
            SessionService.setToken(response.access_token);
            $location.path('/');
        }, function (response) {
            $scope.loginForm.errorMessage = response.error_description;
        });
    }

    $scope.logout = function () {
        LogoutFactory($scope.loginForm.username, $scope.loginForm.password)
        .then(function (response) {
            SessionService.setToken('');
            $location.path('/');
        }, function (response) {
            $scope.loginForm.errorMessage = response.error_description;
        });
    }
}
LoginController.$inject = ['$scope', '$location', 'LoginFactory', 'LogoutFactory', 'SessionService'];