var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngCookies']);

App.controller('LandingPageController', LandingPageController);
App.controller('LoginController', LoginController);
App.controller('RegisterController', RegisterController);
App.controller('NewsController', NewsController);
App.controller('NewsItemController', NewsItemController);
App.controller('UserController', UserController);
App.controller('UsersController', UsersController);
App.controller('PmController', PmController);
App.controller('PmsController', PmsController);
App.controller('ForumController', ForumController);
App.controller('ForumSubsectionController', ForumSubsectionController);

App.service('SessionService', SessionService);

App.factory('Authentication', Authentication);
App.factory('Application', Application);
App.factory('RouteFilter', RouteFilter);

//App.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
App.factory('LoginFactory', LoginFactory);
App.factory('RegisterFactory', RegisterFactory);
App.factory('NewsFactory', NewsFactory);
App.factory('UsersFactory', UsersFactory);
App.factory('PmsFactory', PmsFactory);
App.factory('ForumFactory', ForumFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode({
        enabled: true,
        requireBase : false
    });

    $stateProvider
        .state('home', {
            url: '/', //?donunts
             
            views: {
                "containerMain": {
                    templateUrl: '/news/index',
                    controller: NewsController
                } //,
                //"containerTwo": {
                //    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                //},
                //"nestedView@stateOne": {
                //    templateUrl: '/routesDemo/four'
                //}
            }
        })
        .state('news', {
            url: '/news?page&categoryId',
            views: {
                 "containerMain": {
                    templateUrl: function(params) { return '/news/index?page=' + params.page + '&categoryId=' + params.categoryId },
                    controller: NewsController
                }
            }
        })
        .state('newsInfo', {
            url: '/newsInfo?id',
            views: {
                 "containerMain": {
                    templateUrl: function(params) { return '/news/info?id=' + params.id },
                    controller: NewsItemController
                }
            }
        })

        .state('userInfo', {
            url: '/userInfo?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/user/info?id=' + params.id },
                    controller: UserController
                }
            }
        })

        .state('users', {
            url: '/users?page',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/user/index?page=' + params.page },
                    controller: UsersController
                }
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
            url: '/pms',//'?id',
            views: {
                "containerMain": {
                    templateUrl: '/User/Pms', //function (params) { return '/User/Pms?id=' + params.id },
                    controller: PmsController
                }
            }
        })
        .state('pm', {
            url: '/pm?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/User/Pm?id=' + params.id },
                    controller: PmController
                }
            }
        })
        .state('register', {
            url: '/register?returnUrl',
            views: {
                "containerMain": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        })
        .state('login', {
            url: '/login?returnUrl',
            views: {
                "containerMain": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                }
            }

        })
        .state('forum', {
            url: '/forum',
            views: {
                "containerMain": {
                    templateUrl: '/Forum/Index',
                    controller: ForumController
                }
            }
        })
        .state('subsection', {
            url: '/subsection?id&page',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/Forum/Subsection?id=' + params.id + '&page=' + params.page },
                    controller: ForumSubsectionController
                }
            }
        })
    ;



    //$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

App.config(configFunction);

App.run(function(Authentication, Application, $rootScope, $location, RouteFilter, $http) {
    Authentication.requestUser();
    //    .then(function () {
   //     Application.makeReady();
   // });//todo

    $http.defaults.headers.common.Authorization = 'Bearer ' + Authentication.getToken();

    $rootScope.$on('$stateChangeStart', function(scope, next, current) {
        console.log('stateChange');

       // if ($location.path() === '/loading') return;
        //todo edit to use STATE

        if (! Application.isReady()) {
            //     $location.path('loading');
            console.log('not ready');
        }


        RouteFilter.run($location.path());
    });
});

//App.run().$inject = ['Authentication']