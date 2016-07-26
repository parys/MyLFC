'use strict';
angular.module('materialComment.ctrl', [])
    .controller('MaterialCommentCtrl', [
         '$state', '$stateParams', '$uibModal', 'MaterialCommentFactory',
        function ($state, $stateParams, $uibModal, MaterialCommentFactory) {
            var vm = this;
            vm.page = Number($stateParams.page);
            vm.comments = [];
            vm.countPage = 1;
            vm.onlyUnverified = $stateParams.onlyUnverified ? $stateParams.onlyUnverified : true;

            vm.initList = function () {
                MaterialCommentFactory.getList(vm.page, vm.onlyUnverified)
                    .then(function (response) {
                        vm.comments = response.list;
                        vm.pageNo = response.pageNo;
                        vm.totalItems = response.totalItems;
                        vm.itemPerPage = response.itemPerPage;
                    },
                        function (response) {
                            //$scope.f = "";
                        });

            };

            vm.verify = function(index) {
                MaterialCommentFactory.verify(vm.comments[index].id)
                    .then(function (response) {
                            if (response) {
                                vm.comments.splice(index, 1);
                            }
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            //vm.delete = function (index) {
            //    var modalInstance = $uibModal.open({
            //        animation: true,
            //        templateUrl: 'modalDeleteConfirmation.html',
            //        controller: 'ModalCtrl',
            //        controllerAs: 'vm'
            //        //resolve: {
            //        //    id: function() {
            //        //        return $scoe.selectedNewsId;
            //        //    }
            //        //}
            //    });

            //    modalInstance.result.then(function () {
            //        WishFactory.delete(vm.wishes[index].id)
            //        .then(function (response) {
            //            if (response) {
            //                vm.wishes.splice(index, 1);
            //            }
            //        },
            //            function (response) {

            //            });
            //    }, function () {
            //    });

            //};

            //vm.send = function () {
            //    WishFactory.create(vm.wish)
            //        .then(function (response) {
            //            $state.go('wish');
            //            vm.wish = response;
            //        },
            //            function (response) {
            //                //$scope.f = "";
            //            });
            //};

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