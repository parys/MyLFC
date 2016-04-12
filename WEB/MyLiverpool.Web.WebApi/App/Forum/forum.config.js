'use strict';
angular.module('forum.config',
    ['forum.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('forum', {
                    url: '/forum',
                    //views: {
                    //    "containerMain": {
                    templateUrl: '/app/forum/views/index',
                    controller: 'ForumController',
                    controllerAs: 'vm',
                    // }
                    // },
                    resolve: {
                        $title: function() { return 'Форум'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Форум',
                        parent: 'home'
                    }
                })
                .state('subsection', {
                    url: '/subsection?id&page',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/forum/views/subsection?id=' + params.id + '&page=' + params.page },
                            controller: 'ForumSubsectionController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Раздел'; }
                    },
                    ncyBreadcrumb: {
                        label: '{{vm.name}}',
                         parent: 'forum'
                    }
                })
                .state('subsectionEdit', {
                    url: '/subsectionEdit?id',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/forum/views/subsectionEdit?id=' + params.id },
                            controller: 'ForumSubsectionController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Редактирование подсекции'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование подсекции',
                         parent: 'forum'
                    }
                })
                .state('theme', {
                    url: '/theme?id&page',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/forum/views/theme?id=' + params.id + '&page=' + params.page },
                            controller: 'ForumThemeController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Тема'; }
                    },
                    ncyBreadcrumb: {
                        label: '{{vm.name}}',
                        parent: 'forum'
                    }
                });
        }
    ]);