var App = angular.module('liverpoolApp', ['ui.router', 'ui.bootstrap', 'ngCookies', 'pascalprecht.translate', 'ghiscoding.validation', 'ui.router.title', 'angular-loading-bar', 'autocomplete', 'ngFileUpload']);

App.controller('LandingPageController', LandingPageController);
App.controller('LoginController', LoginController);
App.controller('RegisterController', RegisterController);
App.controller('NewsController', NewsController);
App.controller('NewsItemController', NewsItemController);
App.controller('NewsEditCtrl', NewsEditCtrl);
App.controller('NewsCommentCtrl', NewsCommentCtrl);
App.controller('ModalEditCommentCtrl', ModalEditCommentCtrl);
App.controller('UserController', UserController);
App.controller('UsersController', UsersController);
App.controller('PmController', PmController);
App.controller('PmsController', PmsController);
App.controller('PmWriteCtrl', PmWriteCtrl);
App.controller('ForumController', ForumController);
App.controller('ForumSubsectionController', ForumSubsectionController);
App.controller('ForumThemeController', ForumThemeController);
App.controller('ModalCtrl', ModalCtrl);
App.controller('rightContainerCtrl', rightContainerCtrl);
App.controller('leftContainerCtrl', leftContainerCtrl);
App.controller('ImagesCtrl', ImagesCtrl);
App.controller('RoleGroupsCtrl', RoleGroupsCtrl);

App.service('SessionService', SessionService);

App.factory('Authentication', Authentication);
App.factory('Application', Application);
App.factory('RouteFilter', RouteFilter);

App.factory('RecursionHelper', RecursionHelper);
App.factory('MarkItUpFactory', MarkItUpFactory);
App.directive('tree', tree);
App.directive('markItUp', markItUp);

App.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
App.factory('AccountFactory', AccountFactory);
App.factory('NewsFactory', NewsFactory);
App.factory('NewsCommentsFactory', NewsCommentsFactory);
App.factory('UsersFactory', UsersFactory);
App.factory('PmsFactory', PmsFactory);
App.factory('ForumFactory', ForumFactory);
App.factory('ImagesFactory', ImagesFactory);
App.factory('RoleGroupsFactory', RoleGroupsFactory);//todo sort by name

var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $translateProvider) {

    $locationProvider.hashPrefix('!').html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('home', {
            url: '/', //?donunts

            views: {
                "containerMain": {
                    templateUrl: '/news/list',
                    controller: NewsController
                } //,
                //"containerTwo": {
                //    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                //},
                //"nestedView@stateOne": {
                //    templateUrl: '/routesDemo/four'
                //}
            },
            resolve: {
                // Constant title
                $title: function () { return 'Главная'; }
            }
        })
        .state('rules', {
            url: '/rules',
            views: {
                "containerMain": {
                    templateUrl: '/home/rules',
                    controller: leftContainerCtrl //todo change
                }
            },
            resolve: {
                $title: function () { return 'Правила'; }
            }
        })
        .state('news', {
            url: '/news?page&categoryId',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/news/list?page=' + params.page + '&categoryId=' + params.categoryId },
                    controller: NewsController
                }
            },
            resolve: {
                $title: function () { return 'Новости'; }
            }
        })
        .state('newsInfo', {
            url: '/newsInfo?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/news/info?id=' + params.id },
                    controller: NewsItemController
                }
            },
            resolve: {
                $title: function () { return 'Название новости'; } //todo
            }
        })
        .state('newsEdit', {
            url: '/newsEdit?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/news/Edit?id=' + params.id },
                    controller: NewsEditCtrl
                }
            },
            resolve: {
                $title: function () { return 'Редактирование новости'; }
            }
        })
        .state('newsCategories', {
            url: '/newsCategories',
            views: {
                "containerMain": {
                    templateUrl: '/news/Categories',
                    controller: NewsCategoriesCtrl
                }
            },
            resolve: {
                $title: function () { return 'Категории новостей'; }
            }
        })
        .state('userInfo', {
            url: '/userInfo?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/user/info?id=' + params.id },
                    controller: UserController
                }
            },
            resolve: {
                $title: function () { return 'Профиль '; } //todo
            }
        })
        .state('users', {
            url: '/users?page',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/user/list?page=' + params.page },
                    controller: UsersController
                }
            },
            resolve: {
                $title: function () { return 'Пользователи'; }
            }
        })
        .state('images', {
            url: '/images?path',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/images/index?path=' + params.path },
                    controller: ImagesCtrl
                }
            },
            resolve: {
                $title: function () { return 'Изображения '; } //todo
            }
        })
        //.state('sign-out', {
        //      url: '/signout',
        //      controller: function($state, User) {
        //          User.signOut();
        //          $state.go('home');
        //      },
        //      data: {
        //          requireLogin: false,
        //      }
        //.state('stateTwo', {
        //    url: '/stateTwo',
        //    views: {
        //        "containerMain": {
        //            templateUrl: '/routesDemo/one'
        //        },
        //        "containerTwo": {
        //            templateUrl: '/routesDemo/three'
        //        }
        //    }
        //})
        .state('pms', {
            url: '/pms', //'?id',
            views: {
                "containerMain": {
                    templateUrl: '/User/Pms', //function (params) { return '/User/Pms?id=' + params.id },
                    controller: PmsController
                }
            },
            resolve: {
                $title: function () { return 'Личные сообщения'; }
            }
        })
        .state('pm', {
            url: '/pm?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/User/Pm?id=' + params.id },
                    controller: PmController
                }
            },
            resolve: {
                $title: function () { return 'Чтение сообщения'; }
            }
        })
        .state('wpm', {
            url: '/wpm',
            views: {
                "containerMain": {
                    templateUrl: '/User/WritePm',
                    controller: PmWriteCtrl
                }
            },
            params: {
                title: null,
                userName: null
            },
            resolve: {
                $title: function () { return 'Написание сообщения'; }
            }
        })
        .state('register', {
            url: '/register?returnUrl',
            views: {
                "containerMain": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            },
            resolve: {
                $title: function () { return 'Регистрация'; }
            }
        })
        .state('login', {
            url: '/login?returnUrl',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/Account/Login?returnUrl=' + params.returnUrl },
                    controller: LoginController
                }
            },
            resolve: {
                $title: function () { return 'Страница входа'; }
            }

        })
        .state('forum', {
            url: '/forum',
            views: {
                "containerMain": {
                    templateUrl: '/Forum/Index',
                    controller: ForumController
                }
            },
            resolve: {
                $title: function () { return 'Форум'; }
            }
        })
        .state('subsection', {
            url: '/subsection?id&page',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/Forum/Subsection?id=' + params.id + '&page=' + params.page },
                    controller: ForumSubsectionController
                }
            },
            resolve: {
                $title: function () { return 'Раздел'; } //todo
            }
        })
        .state('theme', {
            url: '/theme?id&page',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/Forum/Theme?id=' + params.id + '&page=' + params.page },
                    controller: ForumThemeController
                }
            },
            resolve: {
                $title: function () { return 'Тема'; } //todo
            }
        })
    .state('confirmed', {
        url: '/confirmed',
        views: {
            "containerMain": {
                templateUrl: '/Account/Confirmed' ,
               // controller: 
            }
        },
        resolve: {
            $title: function () { return 'Ваш аккаунт подтвержден'; }
        }
        });

    $translateProvider.useStaticFilesLoader({
        prefix: 'Scripts/angular-validation/locales/',
        suffix: '.json'
    });

    // define translation maps you want to use on startup
    $translateProvider.preferredLanguage('ru');

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$translateProvider'];

App.config(configFunction);

App.filter('rawHtml', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
}]);

App.run(function (Authentication, Application, $rootScope, $location, RouteFilter, uibPaginationConfig, $state, $stateParams, $window) {
    //$rootScope.roles = "";
    Authentication.requestUser();

    //    .then(function () {
    //     Application.makeReady();
    // });//todo
    $rootScope.alerts = [];

    $rootScope.closeAlert = function (index) {
        $rootScope.alerts.splice(index, 1);
    };



    $rootScope.$on('$stateChangeStart', function (scope, next, current) {
        //console.log('stateChange ');
        //console.log(next);

        //if (next.name == 'login') {

        //}
        // if ($location.path() === '/loading') return;
        //todo edit to use STATE

        if (!Application.isReady()) {
            //     $location.path('loading');
            console.log('not ready');
        }

        //RouteFilter.run($location.path());

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });

    $rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
        console.log('scroll to top');
        $window.scrollTo(0, 0); //todo think about it
    });

    uibPaginationConfig.itemsPerPage = 15;
    uibPaginationConfig.directionLinks = false;
    uibPaginationConfig.maxSize = 5;
    uibPaginationConfig.rotate = false;
});