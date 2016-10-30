'use strict';
angular.module('forum.ctrl', ['forum.factory'])
    .controller('ForumController', [
        'ForumFactory', '$uibModal', '$rootScope',
        function (ForumFactory, $uibModal, $rootScope) {
            var vm = this;
            vm.sections = [];

            vm.init = function () {
                ForumFactory.getForum()
                    .then(function (response) {
                        vm.sections = response.sections;

                    },
                        function (response) {

                        });
            };

            vm.newSectionName = undefined;

            vm.addSection = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'addSection.html',
                    controller: 'ModalForumCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        sectionName: function() {
                            return vm.newSectionName;
                        }
                    }
                });

                modalInstance.result.then(function(sectionName) {
                    ForumFactory.createSection(sectionName).
                        then(function(response) {
                                if (response) {
                                    vm.sections.push(response);
                                    $rootScope.alerts.push({ type: 'success', msg: 'Секция ' + sectionName + 'успешно добавлена.' });
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была добавлена.' });
                            });
                }, function() {
                });
            };

            vm.removeSection = function(index) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalDeleteConfirmation.html',
                    controller: 'ModalCtrl',
                    controllerAs: 'vm'
                    //resolve: {
                    //    id: function() {
                    //        return .selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function() {
                    var sectionId = vm.sections[index].id;
                    ForumFactory.deleteSection(sectionId).
                        then(function(response) {
                                if (response) {
                                    vm.sections.splice(index, 1);
                                    $rootScope.alerts.push({ type: 'success', msg: 'Секция успешно удалена.' });
                                } else {
                                    $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была удалена.' });
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Секция не была удалена.' });
                            });
                }, function() {
                });
            };
        }
    ]);