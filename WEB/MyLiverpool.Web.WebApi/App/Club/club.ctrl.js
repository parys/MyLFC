'use strict';
angular.module('club.ctrl', [])
    .controller('ClubCtrl', [
        '$state', '$stateParams', '$uibModal', 'ClubFactory', 'Upload',
        function($state, $stateParams, $uibModal, ClubFactory, Upload) {
            var vm = this;
            vm.page = Number($stateParams.page);
            vm.items = [];
            vm.countPage = 1;
            vm.item = {
                id: Number($stateParams.id)
            };

            vm.initList = function () {
                ClubFactory.getList(vm.page)
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
                if (!vm.item.id) {
                    return;
                }
                ClubFactory.get(vm.item.id)
                    .then(function (response) {
                        vm.item = response;
                    },
                        function (response) {
                            //$scope.f = "";
                        });
            };

            vm.f = undefined;
            vm.errFile = undefined;
            vm.uploadFiles = function (file, errFiles) {
                vm.f = file;
                vm.errFile = errFiles && errFiles[0];
                if (file) {
                    file.upload = Upload.upload({
                        url: '/api/upload/clubLogo?clubId=' + vm.item.id,
                        method: 'POST',
                        file: file
                    });

                    file.upload.then(function (response) {
                        vm.item.logo = response.data + '?r=' + Math.round();

                    }, function (response) {
                        if (response.status > 0)
                            vm.errorMsg = response.status + ': ' + response.data;
                    }, function (evt) {
                        file.progress = Math.min(100, parseInt(100.0 *
                            evt.loaded / evt.total));
                    });
                }
            };

            //vm.verify = function () {
            //    if (vm.item.id) {
            //        ClubFactory.create(vm.item)
            //            .then(function(response) {
            //                    $state.go('club', { id: response.id });
            //                },
            //                function(response) {
            //                    //$scope.f = "";
            //                });
            //    } else {
            //        ClubFactory.edit(vm.item)
            //       .then(function (response) {
            //           if (response) {
            //               $state.go('club', { id: response.id });
            //           }
            //       },
            //           function (response) {
            //               //$scope.f = "";
            //           });
            //    }
            //};

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
                    ClubFactory.delete(vm.items[index].id)
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
                    ClubFactory.edit(vm.item)
                        .then(function(response) {
                                $state.go('clubs');
                                // vm.item = response;
                            },
                            function(response) {
                                //$scope.f = "";
                            });
                } else {
                    ClubFactory.create(vm.item)
                        .then(function(response) {
                                $state.go('clubs');
                                // vm.item = response;
                            },
                            function(response) {
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

            vm.changeTypeId = function () {
                $stateParams.typeId = vm.typeId;
                vm.filter();
            };

            vm.filter = function () {
                $state.go('comment', { page: vm.pageNo, typeId: vm.typeId, filterText: vm.filterText }, { reload: true });
            };

            vm.filterByText = function () {
                $stateParams.filterText = vm.filterText;
                vm.filter();
            };
        }
    ]);