var ForumController = function ($scope, GetForumFactory, SessionState) {
    $scope.sections = [];

    var init = function () {
        GetForumFactory()
            .then(function (response) {
                $scope.sections = response.Sections;

            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

ForumController.$inject = ['$scope', 'GetForumFactory', 'SessionService'];