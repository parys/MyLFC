'use strict';
angular.module('forum.ctrl')
    .controller('ForumThemeController', [
        'ForumFactory', '$stateParams', '$rootScope', '$state',
        function (ForumFactory, $stateParams, $rootScope, $state) {
            var vm = this;
            vm.messages = [];
            vm.pageNo = 1;
            vm.countPage = 1;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.theme = {};
            vm.newComment = {
                message: undefined,
                themeId: undefined
        };

            vm.init = function() {
                ForumFactory.getTheme($stateParams.id, $stateParams.page)
                    .then(function(response) {
                            vm.messages = response.messages.list;
                            vm.pageNo = response.messages.pageNo;
                            vm.countPage = response.messages.countPage;
                            vm.totalItems = response.messages.totalItems;
                            vm.itemPerPage = response.messages.itemPerPage;
                            vm.theme = response;

                            $rootScope.$title = vm.theme.name;
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
                } else {
                    console.log($stateParams.subsectionId);
                    vm.theme.subsectionId = $stateParams.subsectionId;
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
                        .then(function (response) {
                            $state.go('subsection', { id: response.subsectionId, page: 1 });
                            },
                            function(response) {

                            });
                } else {
                    ForumFactory.createTheme(vm.theme)
                        .then(function (response) {
                            $state.go('subsection', { id: response.subsectionId, page: 1 });
                            },
                            function(response) {

                            });
                }
            };

            vm.addComment = function () {
                vm.newComment.themeId = vm.theme.id;
                ForumFactory.createMessage(vm.newComment)
                    .then(function(response) {
                            vm.messages.push(response);
                            vm.newComment.message = undefined;
                        },
                        function(response) {

                        });
            };

            vm.goToPage = function () {
                $state.go('theme', { id: vm.theme.id, page: vm.pageNo });
            };
        }
    ]);