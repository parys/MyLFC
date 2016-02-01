var ImagesCtrl = function ($scope, ImagesFactory) {
    $scope.sections = [];

    var init = function () {
     //   ForumFactory.getSections()
            .then(function (response) {
                $scope.sections = response.sections;

            },
                function (response) {
                    //$scope.f = "";
                });
    };

  //  init();
};

ImagesCtrl.$inject = ['$scope', 'ImagesFactory'];