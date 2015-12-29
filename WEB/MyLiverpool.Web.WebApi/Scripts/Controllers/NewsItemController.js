var NewsItemController = function ($scope, GetNewsItemFactory, SessionState) {
    $scope.newsItem = [];

    var init = function () {
        GetNewsItemFactory()
            .then(function (response) {
                $scope.newsItem = response;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

NewsItemController.$inject = ['$scope', 'GetNewsItemFactory', 'SessionService'];