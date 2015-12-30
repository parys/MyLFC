//'use strict';

//angular.module('app')
//  .controller('LoadingCtrl', function ($scope, Application, $location) {
var LoadingCtrl = function ($scope, Application, $location)
{
      Application.registerListener(function () {
          // When application is ready then redirect to the main page
          $location.path('/');
      });
  };
//todo
LoadingCtrl.$inject = ['$scope', 'Application', '$location'];


