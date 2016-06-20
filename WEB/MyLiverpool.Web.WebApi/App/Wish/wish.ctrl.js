'use strict';
angular.module('wish.ctrl', [])
    .controller('WishCtrl', [
         '$stateParams', 'WishFactory',
        function($stateParams, WishFactory) {
            var vm = this;
            vm.wish = undefined;
            vm.pageNo = 1;
            //$scope.users = [];
            //$scope.pageNo = 1;
            vm.countPage = 1;
            vm.initList = function (page) {
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

            vm.initEdit = function () {
                if ($stateParams.id) {
                    WishFactory.get($stateParams.id)
                        .then(function(response) {
                                vm.wish = response;
                            },
                            function(response) {
                                //$scope.f = "";
                            });
                }
                WishFactory.getTypes()
                    .then(function(response) {
                            vm.types = response;
                        },
                        function(response) {

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