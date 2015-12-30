var ForumSubsectionController = function ($scope, GetForumSubsectionFactory, SessionState) {
    $scope.themes = [];
    $scope.pageNo = 1;
    $scope.countPage = 1;
    $scope.id = undefined;
    $scope.name = undefined;
    $scope.description = undefined;

    var init = function () {
        GetForumSubsectionFactory()
            .then(function (response) {
                $scope.themes = response.Themes.List;
                $scope.pageNo = response.Themes.PageNo;
                $scope.countPage = response.Themes.CountPage;
                $scope.id = response.Id;
                $scope.name = response.Name;
                $scope.description = response.Description;

            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

ForumSubsectionController.$inject = ['$scope', 'GetForumSubsectionFactory', 'SessionService'];