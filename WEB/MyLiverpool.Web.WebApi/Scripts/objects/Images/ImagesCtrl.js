var ImagesCtrl = function ($scope, ImagesFactory, $stateParams) {
 //   $scope.path = '';
    $scope.files = '';

    $scope.init = function () {
        ImagesFactory.getImages($stateParams.path)
            .then(function (response) {
                    console.log(response);
                    $scope.files = response;

                },
                function(response) {
                    //$scope.f = "";
                });
    };

  //  init();
};

ImagesCtrl.$inject = ['$scope', 'ImagesFactory', '$stateParams'];