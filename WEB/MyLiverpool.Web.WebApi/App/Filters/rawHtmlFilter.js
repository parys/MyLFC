'use strict';
angular.module('liverpoolApp')
    .filter('rawHtml', [
        '$sce', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        }
    ]);