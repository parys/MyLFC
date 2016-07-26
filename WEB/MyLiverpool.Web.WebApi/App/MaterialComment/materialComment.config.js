'use strict';

angular.module('materialComment.config',
    ['materialComment.factory', 'materialComment.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('comment', {
                    url: '/comment?page&onlyVerified',
                    templateUrl: function (params) { return '/app/materialComment/views/list.html?page=' + params.page + '&onlyUnverified=' + params.onlyUnverified; },
                    controller: 'MaterialCommentCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'Комментарии'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Комментарии',
                        parent: 'home'
                    }
                });
            //.state('wish', {
            //    url: '/wish?id',
            //    templateUrl: function (params) { return '/app/wish/views/wish?id=' + params.id; },
            //    controller: 'WishCtrl',
            //    controllerAs: 'vm',
            //    resolve: {
            //        $title: function () { return 'wish'; }//'vm.wish.title'; }
            //    },
            //    ncyBreadcrumb: {
            //        label: '{{vm.wish.title}}',
            //        parent: 'home'
            //    }
            //})
            //.state('wishEdit', {
            //    url: '/wishEdit?id',
            //    templateUrl: function (params) { return '/app/wish/views/edit.html?id=' + params.id; },
            //    controller: 'WishCtrl',
            //    controllerAs: 'vm',
            //    resolve: {
            //        $title: function () { return 'Редактирование'; }
            //    },
            //    ncyBreadcrumb: {
            //        label: 'Редактирование',
            //        parent: 'wishes'
            //    }
            //});
        }
    ]);