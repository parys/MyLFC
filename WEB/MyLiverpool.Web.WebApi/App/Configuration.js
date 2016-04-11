'use strict';
angular.module('liverpoolApp')
    .config([
        '$stateProvider', '$httpProvider', '$locationProvider', '$translateProvider',
        function ($stateProvider, $httpProvider, $locationProvider, $translateProvider) {
            $locationProvider.hashPrefix('!').html5Mode({
                enabled: true,
                requireBase: false
            });

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/app/news/list',
                    controller: 'NewsController',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Главная'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Главная'
                    }
                })
                .state('rules', {
                    url: '/rules',
                    templateUrl: '/app/home/rules',
                    controller: 'leftContainerCtrl', //todo change
                    resolve: {
                        $title: function () { return 'Правила'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Правила',
                        parent: 'home'
                    }
                })
                .state('clubHistory', {
                    url: '/clubHistory',
                    views: {
                        "@": {
                            templateUrl: '/app/home/clubHistory'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Краткая история ЛФК'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Краткая история ЛФК',
                        parent: 'home'
                    }
                })
                .state('images', {
                    url: '/images?path',
                    templateUrl: function (params) { return '/app/images/index?path=' + params.path },
                    controller: 'ImagesCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Изображения '; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Изображения',
                        parent: 'home'
                    }
                })
                .state('pms', {
                    url: '/pms', //'?id',
                    views: {
                        "containerMain": {
                            templateUrl: '/app/Pms/PrivateMessages', //function (params) { return '/User/Pms?id=' + params.id },
                            controller: 'PmsController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Личные сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Личные сообщения',
                        parent: 'home'
                    }
                })
                .state('pm', {
                    url: '/pm?id',
                    views: {
                        "containerMain": {
                            templateUrl: function (params) { return '/app/Pms/Pm?id=' + params.id },
                            controller: 'PmController',
                            controllerAs: 'vm',
                        }
                    },
                    resolve: {
                        $title: function () { return 'Чтение сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Чтение сообщения',
                        parent: 'pms'
                    }
                })
                .state('wpm', {
                    url: '/wpm',
                    views: {
                        "containerMain": {
                            templateUrl: '/app/Pms/WritePm',
                            controller: 'PmWriteCtrl',
                            controllerAs: 'vm',
                        }
                    },
                    params: {
                        title: null,
                        userName: null
                    },
                    resolve: {
                        $title: function () { return 'Написание сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Написание сообщения',
                        parent: 'pms'
                    }
                })
                .state('register', {
                    url: '/register?returnUrl',
                    views: {
                        "containerMain": {
                            templateUrl: '/app/Account/Register',
                            controller: 'RegisterController',
                            controllerAs: 'vm',
                        }
                    },
                    resolve: {
                        $title: function () { return 'Регистрация'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Регистрация',
                        parent: 'home'
                    }
                })
                .state('login', {
                    url: '/login?returnUrl',
                    views: {
                        "containerMain": {
                            templateUrl: function (params) { return '/app/Account/Login?returnUrl=' + params.returnUrl },
                            controller: 'LoginController',
                            controllerAs: 'vm',
                        }
                    },
                    resolve: {
                        $title: function () { return 'Страница входа'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Страница входа',
                        parent: 'home'
                    }
                })

                .state('confirmed', {
                    url: '/confirmed',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/ConfirmEmail'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Ваш аккаунт подтвержден'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Ваш аккаунт подтвержден',
                        parent: 'home'
                    }
                }).state('unconfirmed', {
                    url: '/unconfirmed',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/UnconfirmEmail',
                            controller: 'LoginController',
                            controllerAs: 'vm',

                        }
                    },
                    resolve: {
                        $title: function () { return 'Ваш аккаунт не подтвержден'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Ваш аккаунт не подтвержден',
                        parent: 'home'
                    }
                }).state('forgotPassword', {
                    url: '/forgotPassword',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/forgotPassword',
                            controller: 'LoginController',
                            controllerAs: 'vm',
                        }
                    },
                    resolve: {
                        $title: function () { return 'Забыли пароль?'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Забыли пароль?',
                        parent: 'home'
                    }
                }).state('emailSent', {
                    url: '/emailSent',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/emailSent'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Письмо отправлено'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Письмо отправлено',
                        parent: 'home'
                    }
                }).state('resetPassword', {
                    url: '/resetPassword?code',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/resetPassword',
                            controller: 'LoginController',
                            controllerAs: 'vm',
                        }
                    },
                    resolve: {
                        $title: function () { return 'Восстановление пароля'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Восстановление пароля',
                        parent: 'home'
                    }
                }).state('changePassword', {
                    url: '/changePassword',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/changePassword',
                            controller: 'LoginController',
                            controllerAs: 'vm',
                        }
                    },
                    resolve: {
                        $title: function () { return 'Изменение пароля'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Изменение пароля',
                        parent: 'home'//todo user
                    }
                }).state('passwordChanged', {
                    url: '/passwordChanged',
                    views: {
                    "@": {
                            templateUrl: '/app/Account/passwordChanged'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Пароль успешно изменен'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Пароль успешно изменен',
                        parent: 'home'//todo user
                    }
                });

            $translateProvider.useStaticFilesLoader({
                prefix: 'Scripts/angular-validation/locales/',
                suffix: '.json'
            });

            // define translation maps you want to use on startup
            $translateProvider.preferredLanguage('ru');
            $translateProvider.useSanitizeValueStrategy(null);

            $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

        }
    ]);