'use strict';
angular.module('forum.ctrl')
    .controller('ForumSubsectionController', [
        'ForumFactory', '$rootScope', '$stateParams', '$state',
        function (ForumFactory, $rootScope, $stateParams, $state) {
            var vm = this;
            vm.themes = [];
            vm.pageNo = undefined;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.id = undefined;
            vm.name = undefined;
            vm.description = undefined;
            vm.sections = undefined;
            vm.item = {};
           

            vm.init = function() {
                ForumFactory.getSubsection()
                    .then(function (response) {
                            vm.themes = response.themes.list;
                            vm.pageNo = response.themes.pageNo;
                            vm.totalItems = response.themes.totalItems;
                            vm.itemPerPage = response.themes.itemPerPage;
                            vm.id = response.id;
                            vm.name = response.name;
                            vm.description = response.description;      

                            $rootScope.$title = vm.name;
                        },
                        function(response) {

                        });
            };

            vm.initEdit = function() {
                ForumFactory.getSections()
                    .then(function(response) {
                            vm.sections = response;
                        },
                        function(response) {
                        });
                if ($stateParams.id) {
                    ForumFactory.getSubsection($stateParams.id)
                        .then(function(response) {
                                vm.item = response;
                            },
                            function(response) {

                            });
                } else {
                    vm.item.sectionId = $stateParams.sectionId;
                }
            };

            vm.save = function() {
                if (vm.item.id) {
                    ForumFactory.updateSubsection(vm.item)
                        .then(function(response) {
                                $state.go('forum');
                            },
                            function(response) {

                            });
                } else {
                    ForumFactory.createSubsection(vm.item)
                        .then(function(response) {
                                $state.go('forum');
                            },
                            function(response) {

                            });
                }
            };

            vm.goToPage = function() {
                $state.go('subsection', { id: vm.id, page: vm.pageNo });
            };
        }
    ]);