'use strict';
angular.module('image.ctrl', [])
    .controller('ImageCtrl', [
        'ImageFactory', '$stateParams', '$uibModal',
        function (ImageFactory, $stateParams, $uibModal) {
            var vm = this;

            vm.files = '';

            vm.init = function() {
                ImageFactory.getImages($stateParams.path)
                    .then(function(response) {
                            vm.files = response;
                        },
                        function(response) {
                        });
            };

            vm.showBigImage = function (index) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'imageModal.html',
                    controller: 'ModalShowBigImageCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        image: function () {
                            return vm.files[index];
                        }
                    }
                });

                modalInstance.result.then(function () {
                    //NewsFactory.delete(vm.newsItems[index].id).
                    //    then(function (response) {
                    //        if (response) {
                    //            vm.newsItems.splice(index, 1);
                    //            $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                    //        }
                    //    },
                    //        function (response) {
                    //            $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                    //        });
                }, function () {
                });
            }
        }
    ]);