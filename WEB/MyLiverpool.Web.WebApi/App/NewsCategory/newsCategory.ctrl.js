'use strict';
angular.module('newsCategory.ctrl', [])
    .controller('NewsCategoryCtrl', [
        'NewsCategoryFactory', '$uibModal', '$rootScope', '$stateParams', '$state',
        function (NewsCategoryFactory, $uibModal, $rootScope, $stateParams, $state) {
            var vm = this;
            vm.categories = undefined;
            vm.category = undefined;

            vm.init = function () {
                NewsCategoryFactory.getList()
                    .then(function (response) {
                        vm.categories = response;

                    },
                        function (response) {
                            //.f = "";
                        });
            };

            vm.initEdit = function () {
                if (!$stateParams.id) return;
                NewsCategoryFactory.get($stateParams.id)
                    .then(function (response) {
                        vm.category = response;

                    },
                        function (response) {
                            //.f = "";
                        });
            }

            vm.save = function () {
                if ($stateParams.id) {
                    NewsCategoryFactory.edit($stateParams.id, vm.category)
                        .then(function (response) {
                            $rootScope.alerts.push({ type: 'success', msg: 'Категория успешно изменена.' });
                        },
                        function (response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Категория не была изменена.' });
                        });
                } else {
                    NewsCategoryFactory.create(vm.category)
                        .then(function (response) {
                            $rootScope.alerts.push({ type: 'success', msg: 'Категория успешно создана.' });
                        },
                        function (response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Категория не была создана.' });
                        });
                }
            }

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
                    NewsCategoryFactory.delete(vm.categories[index].id).
                        then(function (response) {
                            if (response) {
                                vm.categories.splice(index, 1);
                                $rootScope.alerts.push({ type: 'success', msg: 'Категория успешно удалена.' });
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Категория не была удалена.' });
                            });
                }, function () {
                });
            }
        }
    ]);