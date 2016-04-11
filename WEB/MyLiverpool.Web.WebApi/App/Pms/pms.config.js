'use strict';

angular.module('pms.config',
    ['pms.factory', 'pms.ctrl'])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('pms', {
                    url: '/pms',
                    views: {
                        "@": {
                            templateUrl: '/app/pms/views/pms',
                            controller: 'PmsController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Личные сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Личные сообщения',
                        parent: 'home'
                    }
                })
                .state('pm', {
                    url: '/pm?id',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/pms/views/Pm?id=' + params.id },
                            controller: 'PmController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Чтение сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Чтение сообщения',
                        parent: 'pms'
                    }
                })
                .state('wpm', {
                    url: '/wpm',
                    views: {
                        "@": {
                            templateUrl: '/app/Pms/views/wpm',
                            controller: 'PmWriteCtrl',
                            controllerAs: 'vm'
                        }
                    },
                    params: {
                        title: null,
                        userName: null
                    },
                    resolve: {
                        $title: function() { return 'Написание сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Написание сообщения',
                        parent: 'pms'
                    }
                });
        }
    ]);