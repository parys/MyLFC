﻿var PmWriteCtrl = function ($scope, $stateParams, PmsFactory, validationService, $state, $rootScope, UsersFactory) {
    $scope.message = {
        title: "",
        message: "",
        receiverUserName: ""
    }
    $scope.errorMessage = undefined;
    $scope.userNames = [];

    $scope.sent = function () {
        if ($scope.userNames.indexOf($scope.message.receiverUserName) < 0) {
            if ($scope.message.receiverUserName != null && $scope.message.receiverUserName.length > 0) {
                $scope.errorMessage = "Пользователя с логином " + $scope.message.receiverUserName + " не существует";
                $scope.message.receiverUserName = "";
            }
        } else {
            $scope.errorMessage = undefined;
        }
        console.log('try ' + !$scope.errorMessage);
        console.log(new validationService().checkFormValidity($scope));
        if (new validationService().checkFormValidity($scope) && !$scope.errorMessage) {
            console.log('inside');
            PmsFactory.sentMessage($scope.message)
                .then(function(response) {
                    if (response) {
                        //todo add cookie for 30 seconds
                            $rootScope.alerts.push({ type: 'success', msg: 'Сообщение успешно отправлено.' });
                            $state.go('pms');
                        }
                    },
                    function (response) {
                        $rootScope.alerts.push({ type: 'danger', msg: 'Сообщение не было отправлено.' });
                    });
        }
    };

    $scope.updateUserNames = function (typed) {
        UsersFactory.getUserNames(typed)
            .then(function (response) {
                    $scope.userNames = response;
                },
                function(response) {
                    $scope.userNames = [];
                });
    }

    function getTitle(title) {
        var match = title.match(/\[.*]/);
        if (match) {
            var newValue = parseInt(match[0].substring(1, match[0].length - 1));
            return title.replace(/\[.*]/, '[' + ++newValue + ']');
        } else {
            return 'Re[1]: ' + title;
        }
    }

    $scope.init = function () {
        console.log(123);
        if ($stateParams.userName) {
            $scope.message.receiverUserName = $stateParams.userName;
            $scope.message.title = getTitle($stateParams.title); //todo update
        }
        $scope.updateUserNames($scope.message.receiverUserName);
    }
};

PmWriteCtrl.$inject = ['$scope', '$stateParams', 'PmsFactory', 'validationService', '$state', '$rootScope', 'UsersFactory'];