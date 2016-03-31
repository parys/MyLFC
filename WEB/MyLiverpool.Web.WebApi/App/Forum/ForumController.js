'use strict';
angular.module('liverpoolApp')
    .controller('ForumController', [
        '$scope', 'ForumFactory', '$uibModal', '$rootScope',
        function ($scope, ForumFactory, $uibModal, $rootScope) {
            $scope.sections = [];

            $scope.init = function () {
                ForumFactory.getSections()
                    .then(function (response) {
                        $scope.sections = response.sections;

                    },
                        function (response) {

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

            $scope.removeSection = function (index) {

                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalDeleteConfirmation.html',
                    controller: 'ModalCtrl' //,
                    //resolve: {
                    //    id: function() {
                    //        return $scope.selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function () {
                    var sectionId = $scope.sections[index].id;
                    ForumFactory.deleteSection(sectionId).
                        then(function (response) {
                            if (response) {
                                $scope.sections.splice(index, 1);
                                $rootScope.alerts.push({ type: 'success', msg: 'Секция успешно удалена.' });
                            } else {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была удалена.' });
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была удалена.' });
                            });
                }, function () {
                });


            }

            //$scope.addSection = function () {
            //    var modalInstance = $uibModal.open({
            //        animation: true,
            //        templateUrl: 'addSection.html',
            //        controller: 'ModalForumCtrl',
            //        resolve: {
            //            sectionName: function () {
            //                return $scope.newSectionName;
            //            }
            //        }
            //    });

            //    modalInstance.result.then(function (sectionName) {
            //        ForumFactory.createSection(sectionName).
            //            then(function (response) {
            //                if (response) {
            //                    $scope.sections.push(response);
            //                    $rootScope.alerts.push({ type: 'success', msg: 'Секция ' + sectionName + 'успешно добавлена.' });
            //                }
            //            },
            //                function (response) {
            //                    $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была добавлена.' });
            //                });
            //    }, function () {
            //    });
            //}
        }
    ]);