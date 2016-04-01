﻿'use strict';
angular.module('liverpoolApp')
    .controller('NewsEditCtrl', [
        'NewsFactory', '$stateParams', 'ValidationService', '$state', 
        function(NewsFactory, $stateParams, ValidationService, $state) {
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

            //vm.$modalInstance = undefined;

            vm.init = function () {
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

            vm.save = function () {
                if (new ValidationService().checkFormValidity(vm)) {
                    if (!vm.item.id) {
                        NewsFactory.create(vm.item)
                            .then(function(response) {
                                    if (response) {
                                        //  $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно создана.' });
                                        $state.go('news');
                                    }
                                },
                                function(response) {
                                    //$rootScope.alerts.push({ type: 'danger', msg: 'Новость не была добавлена.' });
                                });
                    } else {
                        NewsFactory.edit(vm.item)
                            .then(function(response) {
                                    if (response) {
                                        //  $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно создана.' });
                                        $state.go('newsInfo', { id: vm.item.id });
                                    }
                                },
                                function(response) {
                                    //  $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была добавлена.' });
                                });
                    }
                }
            };
        }
    ]);