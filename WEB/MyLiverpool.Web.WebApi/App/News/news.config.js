'use strict';

angular.module('news.config',
    ['news.factory', 'news.ctrl'])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('news', {
                    url: '/news?page&categoryId',
                    templateUrl: function (params) { return '/app/news/list?page=' + params.page + '&categoryId=' + params.categoryId },
                    controller: 'NewsController',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Новости'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Новости',
                        parent: 'home'
                    }
                })
                .state('newsInfo', {
                    url: '/newsInfo?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/news/info?id=' + params.id },
                            controller: 'NewsItemController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Название новости'; } //todo
                    },
                    ncyBreadcrumb: {
                        label:  '{{vm.item.title}}',
                        parent: 'news'
                    }
                })
                .state('newsEdit', {
                    url: '/newsEdit?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/app/news/Edit?id=' + params.id },
                            controller: 'NewsEditCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Редактирование новости'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование новости',
                        parent: 'news'//function (params) {
                        // return 'newsInfo({id:' + params.id + '})';
                        //  }
                    }
                })
                .state('newsCategories', {
                    url: '/newsCategories',
                    templateUrl: '/app/news/Categories',
                    controller: 'NewsCategoriesCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Категории новостей'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Категории новостей',
                        parent: 'news'
                    }
                });
        }
    ]);