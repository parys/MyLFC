'use strict';
angular.module('wish.ctrl', [])
    .controller('WishCtrl', [
         '$state', '$stateParams', '$uibModal', 'WishFactory',
        function ($state, $stateParams, $uibModal, WishFactory) {
            var vm = this;
            vm.wish = undefined;
            vm.pageNo = 1;
            vm.wishes = [];
            //$scope.users = [];
            //$scope.pageNo = 1;
            vm.countPage = 1;

            vm.init = function() {
                if ($stateParams.id) {
                    WishFactory.get($stateParams.id)
                        .then(function(response) {
                                vm.wish = response;
                            },
                            function(response) {
                                //$scope.f = "";
                            });
                } else {
                    $state.go('wish.list');
                }
            };

            vm.initEdit = function () {
                if ($stateParams.id) {
                    WishFactory.get($stateParams.id)
                        .then(function (response) {
                            vm.wish = response;
                        },
                            function (response) {
                                //$scope.f = "";
                            });
                }
                WishFactory.getTypes()
                    .then(function (response) {
                        vm.types = response;
                    },
                        function (response) {

                        });
            };

            vm.initList = function (page) {
                WishFactory.getList(page)
                    .then(function (response) {
                        vm.wishes = response;
                      //  vm.pageNo = response.pageNo;
                      //  vm.countPage = response.CountPage;
                    },
                        function (response) {
                            //$scope.f = "";
                        });
            };

            vm.delete = function (index) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalDeleteConfirmation.html',
                    controller: 'ModalCtrl',
                    controllerAs: 'vm'
                    //resolve: {
                    //    id: function() {
                    //        return $scoe.selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function () {
                    WishFactory.delete(vm.wishes[index].id)
                    .then(function (response) {
                        if (response) {
                            vm.wishes.splice(index, 1);
                        }
                    },
                        function (response) {

                        });
                }, function () {
                });
                
            };

            vm.send = function() {
                WishFactory.create(vm.wish)
                    .then(function (response) {
                            $state.go('wish');
                            vm.wish = response;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            vm.getType = function($index) {
                switch (vm.wishes[$index].type) {
                case 1:
                    return 'bg-danger';
                case 2:
                    return 'bg-warning';
                case 3:
                    return 'bg-info';
                case 4:
                    return 'bg-primary';
                default:
                }
            }

            //$scope.goToPage = function () {
            //    $state.go('users', { page: $scope.pageNo });
            //}

        }
    ]);