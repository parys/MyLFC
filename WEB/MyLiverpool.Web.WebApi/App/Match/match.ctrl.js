'use strict';
angular.module('match.ctrl', [])
    .controller('MatchCtrl', [
        '$state', '$stateParams', '$uibModal', 'MatchFactory', 'ClubFactory',
        function ($state, $stateParams, $uibModal, MatchFactory, ClubFactory) {
            var vm = this;
            vm.page = Number($stateParams.page);
            vm.items = [];
            vm.countPage = 1;
            vm.item = {
                id: Number($stateParams.id),
                dateTime: new Date()
            };

            vm.initList = function () {
                MatchFactory.getList(vm.page)
                    .then(function (response) {
                        vm.items = response.list;
                        vm.pageNo = response.pageNo;
                        vm.totalItems = response.totalItems;
                        vm.itemPerPage = response.itemPerPage;
                    },
                        function (response) {
                            //$scope.f = "";
                        });
            };

            vm.initEdit = function () {
                if (vm.item.id) {
                    MatchFactory.get(vm.item.id)
                        .then(function(response) {
                                vm.item = response;
                            },
                            function(response) {
                                //$scope.f = "";
                            });
                } else {
                    vm.item = {
                        clubName: '',
                        time: new Date()
                    };
                }
                vm.updateClubs(vm.item.clubName);
                vm.updateTypes();
            };

            vm.updateClubs = function (typed) {
                ClubFactory.getClubs(typed)
                    .then(function (response) {
                        vm.clubs = response;
                    },
                        function (response) {
                            vm.clubs = [];
                        });
            };

            vm.updateTypes = function () {
                MatchFactory.getTypes()
                    .then(function (response) {
                        vm.types = response;
                    },
                        function (response) {
                            vm.types = [];
                        });
            };

            vm.open = function () {
                vm.status.opened = true;
            };

            vm.status = {
                opened: false
            };

            vm.dateOptions = {
                formatYear: 'yyyy',
                startingDay: 1
            };

            vm.timeChanged = function () {
                var d = new Date(vm.item.date);
                d.setHours(vm.item.time.getHours());
                d.setMinutes(vm.item.time.getMinutes());
                d.setSeconds(vm.item.time.getSeconds());
                console.log(d);
                vm.item.dateTime = d;
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
                    MatchFactory.delete(vm.items[index].id)
                    .then(function (response) {
                        if (response) {
                            vm.items.splice(index, 1);
                        }
                    },
                        function (response) {

                        });
                }, function () {
                });
            };

            vm.save = function () {
                if (vm.item.id) {
                    MatchFactory.edit(vm.item)
                        .then(function (response) {
                            $state.go('matches');
                            // vm.item = response;
                        },
                            function (response) {
                                //$scope.f = "";
                            });
                } else {
                    MatchFactory.create(vm.item)
                        .then(function (response) {
                            $state.go('matches');
                            // vm.item = response;
                        },
                            function (response) {
                                //$scope.f = "";
                            });
                }
            };

            //vm.getType = function ($index) {
            //    switch (vm.wishes[$index].type) {
            //        case 1:
            //            return 'panel-danger';
            //        case 2:
            //            return 'panel-warning';
            //        case 3:
            //            return 'panel-info';
            //        case 4:
            //            return 'panel-primary';
            //        default:
            //            return '';
            //    }
            //};

            vm.goToPage = function () {
                vm.filter();
            };

            //vm.changeTypeId = function () {
            //    $stateParams.typeId = vm.typeId;
            //    vm.filter();
            //};

            vm.filter = function () {
                $state.go('matches', { page: vm.pageNo }, { reload: true });
            };

            //vm.filterByText = function () {
            //    $stateParams.filterText = vm.filterText;
            //    vm.filter();
            //};
        }
    ]);