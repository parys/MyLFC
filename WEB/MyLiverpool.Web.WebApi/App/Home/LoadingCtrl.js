'use strict';
angular.module('liverpoolApp')
    .controller('LoadingCtrl', [
        'Application', '$location',
        function(Application, $location) {
            var vm = this;
            Application.registerListener(function() {
                // When application is ready then redirect to the main page
                $location.path('/');
            });
        }
    ]);