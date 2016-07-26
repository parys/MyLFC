'use strict';
angular.module('wish.ctrl', [])
    .controller('WishCtrl', [
         '$state', '$stateParams', '$uibModal', 'WishFactory',
        function ($state, $stateParams, $uibModal, WishFactory) {
            var vm = this;
            vm.wish = undefined;
            vm.page = Number($stateParams.page);
            vm.wishes = [];
            vm.countPage = 1;
            vm.typeId = Number($stateParams.typeId);
            vm.types = [];
            vm.filterText = $stateParams.filterText;
        
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
                vm.updateTypes();
            };

            vm.initList = function () {
                WishFactory.getList(vm.page, vm.typeId, vm.filterText)
                    .then(function (response) {
                        vm.wishes = response.list;
                        vm.pageNo = response.pageNo;
                        vm.totalItems = response.totalItems;
                        vm.itemPerPage = response.itemPerPage;
                    },
                        function (response) {
                            //$scope.f = "";
                        });

                vm.updateTypes();
            };

            vm.updateTypes = function() {
                WishFactory.getTypes()
                    .then(function(response) {
                        vm.types = response;
                        vm.types.push({ name: 'Все типы', id: NaN });
                        },
                        function(response) {

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
                            $state.go('wishes');
                            vm.wish = response;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            vm.getType = function($index) {
                switch (vm.wishes[$index].type) {
                case 1:
                    return 'panel-danger';
                case 2:
                    return 'panel-warning';
                case 3:
                    return 'panel-info';
                case 4:
                    return 'panel-primary';
                    default:
                        return '';
                }
            };

            vm.goToPage = function() {
                vm.filter();
            };

            vm.changeTypeId = function () {
                $stateParams.typeId = vm.typeId;
                vm.filter();
            };

            vm.filter = function () {
                $state.go('wishes', { page: vm.pageNo, typeId: vm.typeId, filterText: vm.filterText }, { reload: true });
            };

            vm.filterByText = function() {
                $stateParams.filterText = vm.filterText;
                vm.filter();
            };
        }
    ]);