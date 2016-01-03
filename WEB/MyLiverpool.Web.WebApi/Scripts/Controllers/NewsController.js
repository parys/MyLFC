var NewsController = function ($scope, NewsFactory, $uibModal, $rootScope) {
    $scope.newsItems = [];
    $scope.pageNo = 1;
    $scope.countPage = 1;
    $scope.selectedNewsId = undefined;

    var init = function() {
        NewsFactory.getList()
            .then(function(response) {
                    $scope.newsItems = response.list;
                    $scope.pageNo = response.pageNo;
                    $scope.countPage = response.countPage;
                },
                function(response) {
                    //$scope.f = "";
                });
    };

    $scope.activate = function(index) {
        NewsFactory.activate($scope.newsItems[index].id).
                then(function (response) {
                    if (response) {
                        $scope.newsItems[index].pending = false;
                        $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно активирована.' });
                    }
                },
                function (response) {
                    $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была активирована.' });
                });
    }

    $scope.isUserAuthor = function (userId, newsUserId) {
        return userId == newsUserId;
    }

    $scope.$modalInstance = undefined;

    $scope.delete = function(index) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modalDeleteConfirmation.html',
            controller: 'ModalCtrl'//,
            //resolve: {
            //    id: function() {
            //        return $scope.selectedNewsId;
            //    }
            //}
        });

        modalInstance.result.then(function () {
            NewsFactory.delete($scope.newsItems[index].id).
                then(function (response) {
                        if (response) {
                            $scope.newsItems.splice(index, 1);
                            $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                        }
                    },
                function (response) {
                    $rootScope.alerts.push({type: 'danger', msg: 'Новость не была удалена.'});
                });
        }, function () {
        });
        
    }

    init();
};

NewsController.$inject = ['$scope', 'NewsFactory', '$uibModal', '$rootScope'];