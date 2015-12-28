var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngCookies']);

App.controller('LandingPageController', LandingPageController);
App.controller('LoginController', LoginController);
App.controller('RegisterController', RegisterController);
App.controller('ValuesController', ValuesController);

App.service('SessionService', SessionService);

//App.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
App.factory('LoginFactory', LoginFactory);
App.factory('RegisterFactory', RegisterFactory);
App.factory('GetValuesFactory', GetValuesFactory);

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
        .state('values', {
            url: '/values',
            views: {
                "containerMain": {
                    templateUrl: "/Values/Get",
                    controller: ValuesController
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
        //})
        //.state('logout', {
        //    url: '/logout',
        //    views: {
        //        "ContainerMain": {
        //            templateUrl: 'Account/Logout',
        //            controller: LoginController
        //        }
        //}
        });



    //$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

App.config(configFunction);