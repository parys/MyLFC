'use strict';
angular.module('forum.ctrl')
    .controller('ForumThemeController', [
        'ForumFactory', '$stateParams', '$rootScope',
        function(ForumFactory, $stateParams, $rootScope) {
            var vm = this;
            vm.messages = [];
            vm.pageNo = 1;
            vm.countPage = 1;
            vm.id = undefined;
            vm.name = undefined;
            vm.description = undefined;
            vm.theme = undefined;

            vm.init = function() {
                ForumFactory.getTheme($stateParams.id, $stateParams.page)
                    .then(function(response) {
                            vm.messages = response.messages.list;
                            vm.pageNo = response.messages.pageNo;
                            vm.countPage = response.messages.countPage;
                            vm.id = response.id;
                            vm.name = response.name;
                            vm.description = response.description;
                            $rootScope.$title = vm.name;
                        },
                        function(response) {

                        });
            };

            vm.initEdit = function() {
                if ($stateParams.id) {
                    ForumFactory.getThemeForEdit($stateParams.id)
                        .then(function(response) {
                                vm.theme = response;
                                $rootScope.$title = vm.theme.name;
                            },
                            function(response) {

                            });
                }
                ForumFactory.getSubsections()
                    .then(function(response) {
                            vm.subsections = response;
                        },
                        function(response) {}
                    );
            };

            vm.save = function() {
                if (vm.theme.id) {
                    ForumFactory.updateTheme(vm.theme.id, vm.theme)
                        .then(function(response) {
                                $state.go('forum');
                            },
                            function(response) {

                            });
                } else {
                    ForumFactory.createTheme(vm.theme)
                        .then(function(response) {
                                $state.go('forum');
                            },
                            function(response) {

                            });
                }
            };
        }
    ]);