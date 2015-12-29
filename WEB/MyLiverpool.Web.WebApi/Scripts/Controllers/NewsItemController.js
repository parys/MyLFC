var NewsItemController = function ($scope, GetNewsItemFactory, SessionState) {
    $scope.item = [];

    var init = function () {
        GetNewsItemFactory()
            .then(function (response) {
                $scope.item = response;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

NewsItemController.$inject = ['$scope', 'GetNewsItemFactory', 'SessionService'];