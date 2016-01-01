var NewsItemController = function ($scope, NewsFactory) {
    $scope.item = [];

    var init = function () {
        NewsFactory.getItem()
            .then(function (response) {
                $scope.item = response;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

NewsItemController.$inject = ['$scope', 'NewsFactory'];