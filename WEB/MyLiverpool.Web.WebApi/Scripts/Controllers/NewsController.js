var NewsController = function ($scope, GetNewsItemsFactory, SessionState) {
    $scope.newsItems = [];
    $scope.pageNo = 1;
    $scope.countPage = 1;

    var init = function() {
        GetNewsItemsFactory()
            .then(function(response) {
                    $scope.newsItems = response.List;
                    $scope.pageNo = response.PageNo;
                    $scope.countPage = response.CountPage;

                },
                function(response) {
                    //$scope.f = "";
                });
    };

    init();
};

NewsController.$inject = ['$scope', 'GetNewsItemsFactory', 'SessionService'];


//$scope.login = function () {
//    LoginFactory($scope.loginForm.username, $scope.loginForm.password)
//    .then(function (response) {
//        SessionService.setToken(response.access_token);
//        $location.path('/');
//    }, function (response) {
//        $scope.loginForm.errorMessage = response.error_description;
//    });
//}