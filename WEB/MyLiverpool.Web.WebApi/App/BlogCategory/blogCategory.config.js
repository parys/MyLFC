'use strict';
angular.module('blogCategory.config',
    ['blogCategory.factory', 'blogCategory.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('blogCategories', {
                    url: '/blogCategories',
                    templateUrl: '/app/blogCategory/views/list.html',
                    controller: 'BlogCategoryCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Категории блогов'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Категории блогов',
                        parent: 'blog'
                    }
                })
                .state('blogCategoriesEdit', {
                    url: '/blogCategoriesEdit?id',
                    templateUrl: function (params) { return '/app/blogCategory/views/edit.html?id=' + params.id; },
                    controller: 'BlogCategoryCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Редактирование категории'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование blog',
                        parent: 'blogCategories'
                    }
                });
        }
    ]);