'use strict';
angular.module('image.ctrl', ['ngFileUpload'])
    .controller('ImageCtrl', [
        'ImageFactory', '$stateParams', '$uibModal', 'Upload', '$timeout',
        function (ImageFactory, $stateParams, $uibModal, Upload, $timeout) {
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

            vm.showBigImage = function(index) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'imageModal.html',
                    controller: 'ModalShowBigImageCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        image: function() {
                            return vm.files[index];
                        }
                    }
                });

                modalInstance.result.then(function() {
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
                }, function() {
                });
            };

            vm.uploadFiles = function (files) {
                console.log(files);
                vm.files = files;
                if (files && files.length) {
                    Upload.upload({
                        url: '/api/upload/images',
                        method: 'POST',
                        data: {
                            files: files
                        }
                    }).then(function (response) {
                        $timeout(function () {
                            vm.result = response.data;
                        });
                    }, function (response) {
                        if (response.status > 0) {
                            vm.errorMsg = response.status + ': ' + response.data;
                        }
                    }, function (evt) {
                        vm.progress =
                            Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }
            };
        }
    ]);