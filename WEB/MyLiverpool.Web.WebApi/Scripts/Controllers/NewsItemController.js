var NewsItemController = function ($scope, NewsFactory, $uibModal, NewsCommentsFactory) {//, $sce) {
    $scope.item = [];

    $scope.comment = {
            id: undefined,
            message: undefined,
            parentId: undefined,
            newsItemId: undefined,
            authorId: undefined,
            authorUserName: undefined,
    };

    var init = function () {
        NewsFactory.getItem()
            .then(function (response) {
                $scope.item = response;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    $scope.activate = function (index) {
        NewsFactory.activate($scope.id).
            then(function(response) {
                    if (response) {
                        $scope.newsItems[index].pending = false;
                        $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно активирована.' });
                    }
                },
                function(response) {
                    $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была активирована.' });
                });
    }

    $scope.isUserAuthor = function (userId, newsUserId) {
        return userId == newsUserId;
    }
    
    $scope.delete = function (index) {
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
            NewsFactory.delete($scope.id).
                then(function (response) {
                    if (response) {
                        $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                    }
                },
                function (response) {
                    $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                });
        }, function () {
        });

    }

    $scope.addComment = function () {
        $scope.comment.newsItemId = $scope.item.id;
        NewsCommentsFactory.add($scope.comment).
            then(function(response) {
                //todo 
                    $scope.comment.id = response;
                    $scope.comment.authorId = 1;
                    $scope.comment.authorUserName = 'adminka';
                    $scope.item.comments.push($scope.comment);
                },
                function(response) {
                    console.log('NOT added');
                });


    }

    init();
};

NewsItemController.$inject = ['$scope', 'NewsFactory', '$uibModal', 'NewsCommentsFactory'];//, '$sce'];