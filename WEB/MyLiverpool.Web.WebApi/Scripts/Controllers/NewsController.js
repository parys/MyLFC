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