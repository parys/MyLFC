'use strict';
angular.module('liverpoolApp')
    .controller('ForumController', [
        '$scope', 'ForumFactory', '$uibModal',
        function($scope, ForumFactory, $uibModal) {
            $scope.sections = [];

            $scope.init = function() {
                ForumFactory.getSections()
                    .then(function(response) {
                            $scope.sections = response.sections;

                        },
                        function(response) {
                            
                        });
            };

            $scope.newSectionName = undefined;

            $scope.addSection = function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'addSection.html',
                    controller: 'ModalCtrl',
                    resolve: {
                        newSectionName: function () {
                            return $scope.newSectionName;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    console.log($scope.newSectionName);
                //    NewsFactory.delete($scope.item.id).
                //        then(function (response) {
                //            if (response) {
                //                // $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                //              //  $state.go('home');
                //            }
                //        },
                //            function (response) {
                //                $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                //            });
                //}, function () {
                });
            }
        }
    ]);