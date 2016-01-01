var UsersController = function ($scope, $stateParams, GetUsersFactory) {
    $scope.users = [];
    $scope.pageNo = 1;
    $scope.countPage = 1;
    var init = function () {
        GetUsersFactory($stateParams.page)
            .then(function (response) {
                $scope.users = response.list;
                $scope.pageNo = response.pageNo;
                $scope.countPage = response.CountPage;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

UsersController.$inject = ['$scope', '$stateParams', 'GetUsersFactory'];