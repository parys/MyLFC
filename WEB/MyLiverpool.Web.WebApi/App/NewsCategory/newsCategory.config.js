'use strict';
angular.module('newsCategory.config',
    ['newsCategory.factory', 'newsCategory.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('newsCategories', {
                    url: '/newsCategories',
                    templateUrl: '/app/newsCategory/views/list',
                    controller: 'NewsCategoryCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'Категории новостей'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Категории новостей',
                        parent: 'news'
                    }
                })
                .state('newsCategoriesEdit', {
                    url: '/newsCategoriesEdit?id',
                    templateUrl: function(params) { return '/app/newsCategory/views/edit?id=' + params.id },
                    controller: 'NewsCategoryCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'Редактирование категории'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование категории',
                        parent: 'newsCategories'
                    }
                });
        }
    ]);