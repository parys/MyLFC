'use strict';
angular.module('liverpoolApp')
    .controller('NewsEditCtrl', [
        'NewsFactory', '$stateParams', 'ValidationService', '$state', '$rootScope',
        function(NewsFactory, $stateParams, ValidationService, $state, $rootScope) {
            var vm = this;
            vm.item = {
                id: undefined,
                title: undefined,
                brief: undefined,
                message: undefined,
                source: undefined,
                photoPath: undefined,
                canCommentary: undefined,
                onTop: undefined,
                pending: undefined,
                newsCategoryId: ''
            };
            vm.categories = [];

            vm.init = function() {
                if ($stateParams.id) {
                    NewsFactory.getItem($stateParams.id)
                        .then(function(response) {
                                vm.item = response;
                            },
                            function(response) {
                                //vm.f = "";
                            });
                }
                NewsFactory.getCategories()
                    .then(function(response) {
                            vm.categories = response;
                        },
                        function(response) {
                            //vm.f = "";
                        });
            };

            vm.save = function() {
                if (!vm.item.id) {
                    NewsFactory.create(vm.item)
                        .then(function(response) {
                                if (response) {
                                    $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно создана.' });
                                    $state.go('news');
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была добавлена.' });
                            });
                } else {
                    NewsFactory.edit(vm.item)
                        .then(function(response) {
                                if (response) {
                                    $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно отредактирована.' });
                                    $state.go('newsInfo', { id: vm.item.id });
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была отредактирована.' });
                            });
                }
            };
        }
    ]);