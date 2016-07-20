'use strict';
angular.module('blog.config',
    ['blog.factory', 'blog.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('blog', {
                    url: '/blog?page&categoryId&userName',
                    templateUrl: function (params) {
                        return '/app/blog/views/list.html?page=' + params.page + '&categoryId=' + params.categoryId + '&userName=' + params.userName;
                    },
                    controller: 'BlogCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Новости'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Новости {{vm.categoryId ? vm.newsItems[0].newsCategoryName : ""}}',
                        parent: 'home'
                    }
                })
                .state('blogInfo', {
                    url: '/blogInfo?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/blog/views/info.html?id=' + params.id; },
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Название блога'; }
                    },
                    ncyBreadcrumb: {
                        label: '{{vm.item.title}}',
                        parent: 'blog'
                    }
                })
                .state('blogEdit', {
                    url: '/blogEdit?id',
                    views: {
                        '': {
                            templateUrl: function (params) { return '/app/blog/views/Edit.html?id=' + params.id; },
                            controller: 'BlogCtrl',
                            controllerAs: 'vm'
                        },
                        'files@newsEdit': {
                            templateUrl: '/app/image/views/add.html',
                            controller: 'ImageCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Редактирование блога'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование блога',
                        parent: 'news'
                    }
                });
        }
    ]);