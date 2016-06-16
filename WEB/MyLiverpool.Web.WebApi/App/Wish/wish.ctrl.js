'use strict';
angular.module('wish.ctrl', [])
    .controller('WishCtrl', [
         'WishFactory',
        function(WishFactory) {
            var vm = this;
            vm.wish = undefined;
            vm.pageNo = 1;
            //$scope.users = [];
            //$scope.pageNo = 1;
            vm.countPage = 1;
            var initList = function (page) {
                WishFactory.getList(page)
                    .then(function (response) {
                        vm.wish = response.list;
                        vm.pageNo = response.pageNo;
                        vm.countPage = response.CountPage;
                    },
                        function (response) {
                            //$scope.f = "";
                        });
            };

            var init = function () {
                WishFactory.getList($stateParams.id)
                    .then(function (response) {
                        vm.wish = response;
                    },
                        function (response) {
                            //$scope.f = "";
                        });
            };
            //$scope.isNotSelf = function (userId, userId2) {
            //    return userId != userId2;
            //}

            //$scope.goToPage = function () {
            //    $state.go('users', { page: $scope.pageNo });
            //}

            //init($stateParams.page);
        }
    ]);