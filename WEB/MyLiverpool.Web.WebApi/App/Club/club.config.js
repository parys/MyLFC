'use strict';
angular.module('club.config',
    ['club.ctrl', 'club.factory'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('clubs', {
                    url: '/clubs',
                    //views: {
                    //    "containerMain": {
                    templateUrl: '/app/club/views/list.html',
                    controller: 'ClubCtrl',
                    controllerAs: 'vm',
                    // }
                    // },
                    resolve: {
                        $title: function () { return 'Клубы'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Клубы',
                        parent: 'home'
                    }
                })
                .state('club', {
                    url: '/club/:id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/club/views/index?id=' + params.id; },
                            controller: 'ClubCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Клуб'; }
                    },
                    ncyBreadcrumb: {
                        label: '{{vm.name}}',
                        parent: 'clubs'
                    }
                })
                .state('clubEdit', {
                    url: '/clubEdit?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/club/views/edit.html?id=' + params.id; },
                            controller: 'ClubCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Редактирование клуба'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование клуба',
                        parent: 'clubs'
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