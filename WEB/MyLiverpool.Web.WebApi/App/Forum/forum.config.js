'use strict';
angular.module('forum.config',
    ['forum.factory', 'forum.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('forum', {
                    url: '/forum',
                    //views: {
                    //    "containerMain": {
                    templateUrl: '/app/Forum/Index',
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
                .state('forum.subsection', {
                    url: '/subsection?id&page',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/Forum/Subsection?id=' + params.id + '&page=' + params.page },
                            controller: 'ForumSubsectionController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Раздел'; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Раздел',
                        // parent: 'forum'
                    }
                })
                .state('forum.subsection.theme', {
                    url: '/theme?id&page',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/Forum/Theme?id=' + params.id + '&page=' + params.page },
                            controller: 'ForumSubsectionController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Тема'; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Тема',
                        parent: 'forum'
                    }
                });
        }
    ]);