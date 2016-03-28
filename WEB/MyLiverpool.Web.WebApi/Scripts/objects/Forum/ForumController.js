'use strict';
angular.module('liverpoolApp')
    .controller('ForumController', [
        '$scope', 'ForumFactory', '$uibModal', '$rootScope',
        function($scope, ForumFactory, $uibModal, $rootScope) {
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
                    controller: 'ModalForumCtrl',
                    resolve: {
                        sectionName: function () {
                            return $scope.newSectionName;
                        }
                    }
                });

                modalInstance.result.then(function (sectionName) {
                    ForumFactory.createSection(sectionName).
                        then(function (response) {
                            if (response) {
                                $scope.sections.push(response);
                                $rootScope.alerts.push({ type: 'success', msg: 'Секция ' + sectionName + 'успешно добавлена.' });
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была добавлена.' });
                            });
                }, function () {
                });
            }
        }
    ]);