'use strict';
angular.module('liverpoolApp')
  .controller('LoadingCtrl', ['$scope', 'Application', '$location', function ($scope, Application, $location) {
      Application.registerListener(function () {
          // When application is ready then redirect to the main page
          $location.path('/');
      });
  }]);