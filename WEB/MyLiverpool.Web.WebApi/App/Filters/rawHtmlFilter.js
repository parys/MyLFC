'use strict';
angular.module('filter', [])
    .filter('rawHtml', [
        '$sce',
        function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        }
    ]);