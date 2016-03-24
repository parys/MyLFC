'use strict';
angular.module('liverpoolApp')
.controller('rightContainerCtrl',
[
    '$scope', // '$state', 'Authentication', 'RouteFilter', 'AccountFactory', '$location', 'UsersFactory', '$interval',
    function($scope) { // $state, Authentication, RouteFilter, AccountFactory, $location, UsersFactory, $interval) {

//var rightContainerCtrl = function ($scope) {
        $scope.title = 'i am right';
    }
]);

//rightContainerCtrl.$inject = ['$scope'];