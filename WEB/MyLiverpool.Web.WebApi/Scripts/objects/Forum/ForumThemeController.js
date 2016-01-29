var ForumThemeController = function ($scope, ForumFactory, $stateParams) {
    $scope.messages = [];
    $scope.pageNo = 1;
    $scope.countPage = 1;
    $scope.id = undefined;
    $scope.name = undefined;
    $scope.description = undefined;

    var init = function () {
        ForumFactory.getTheme($stateParams.id, $stateParams.page)
            .then(function (response) {
                $scope.messages = response.messages.list;
                $scope.pageNo = response.messages.pageNo;
                $scope.countPage = response.messages.countPage;
                $scope.id = response.id;
                $scope.name = response.name;
                $scope.description = response.description;

            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

ForumThemeController.$inject = ['$scope', 'ForumFactory', '$stateParams'];