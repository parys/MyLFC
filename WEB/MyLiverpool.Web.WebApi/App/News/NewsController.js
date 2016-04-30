'use strict';
angular.module('news.ctrl', [])
    .controller('NewsController', [
        'NewsFactory', '$uibModal', '$rootScope', '$stateParams', '$state',
        function(NewsFactory, $uibModal, $rootScope, $stateParams, $state) {
            var vm = this;
            vm.newsItems = [];
            vm.pageNo = undefined;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.categoryId = undefined;

            vm.init = function () {
                    vm.pageNo = $stateParams.page;
                vm.categoryId = $stateParams.categoryId;
                
                NewsFactory.getList(vm.pageNo, vm.categoryId)
                    .then(function(response) {
                        vm.newsItems = response.list;
                        vm.pageNo = response.pageNo;
                        vm.totalItems = response.totalItems;
                        vm.itemPerPage = response.itemPerPage;
                        },
                        function(response) {
                            //.f = "";
                        });
            };

            vm.activate = function (index) {
                NewsFactory.activate(vm.newsItems[index].id).
                    then(function(response) {
                            if (response) {
                                vm.newsItems[index].pending = false;
                                $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно активирована.' });
                            }
                        },
                        function(response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была активирована.' });
                        });
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

                modalInstance.result.then(function() {
                    NewsFactory.delete(vm.newsItems[index].id).
                        then(function(response) {
                                if (response) {
                                    vm.newsItems.splice(index, 1);
                                    $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                            });
                }, function() {
                });
            }

            vm.goToPage = function () {
                $state.go('news', { page: vm.pageNo });
            }
        }
    ]);