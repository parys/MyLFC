'use strict';
angular.module('match.config',
    ['match.ctrl', 'match.factory'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('matches', {
                    url: '/matches',
                    templateUrl: '/app/match/views/list.html',
                    controller: 'MatchCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Клубы'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Клубы',
                        parent: 'home'
                    }
                })
                .state('match', {
                    url: '/match/:id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/match/views/index?id=' + params.id; },
                            controller: 'MatchCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Клуб'; }
                    },
                    ncyBreadcrumb: {
                        label: '{{vm.name}}',
                        parent: 'matches'
                    }
                })
                .state('matchEdit', {
                    url: '/matchEdit?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/match/views/edit.html?id=' + params.id; },
                            controller: 'MatchCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Редактирование клуба'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование клуба',
                        parent: 'matches'
                    }
                    //})
                    //.state('theme', {
                    //    url: '/theme?id&page',
                    //    views: {
                    //        "@": {
                    //            templateUrl: function (params) { return '/app/forum/views/theme.html?id=' + params.id + '&page=' + params.page; },
                    //            controller: 'ClubCtrl',
                    //            controllerAs: 'vm'
                    //        }
                    //    },
                    //    params: {
                    //        subsectionId: null
                    //    },
                    //    resolve: {
                    //        $title: function () { return 'Тема'; }
                    //    },
                    //    ncyBreadcrumb: {
                    //        label: '{{vm.name}}',
                    //        parent: 'forum'
                    //    }
                    //})
                    //.state('themeEdit', {
                    //    url: '/themeEdit?id',
                    //    views: {
                    //        "@": {
                    //            templateUrl: function (params) { return '/app/forum/views/themeEdit?id=' + params.id; },
                    //            controller: 'ClubCtrl',
                    //            controllerAs: 'vm'
                    //        }
                    //    },
                    //    params: {
                    //        subsectionId: null
                    //    },
                    //    resolve: {
                    //        $title: function () { return 'Редактирование темы'; }
                    //    },
                    //    ncyBreadcrumb: {
                    //        label: 'Редактирование темы',
                    //        parent: 'forum'
                    //    }
                });
        }
    ]);