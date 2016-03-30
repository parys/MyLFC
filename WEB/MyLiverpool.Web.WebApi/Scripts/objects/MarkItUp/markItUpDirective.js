'use strict';
angular.module('liverpoolApp')
    .directive('markItUp', [
        'MarkItUpFactory', function (MarkItUpFactory) {
            return {
                restrict: "A",
                scope: {
                    ngModel: "="
                },
                link: function(scope, element, attrs) {
                    var settings = MarkItUpFactory.create(function(event) {
                        scope.$apply(function() {
                            scope.ngModel = event.textarea.value;
                        });
                    });
                    angular.element(element).markItUp(settings);
                }
            };
        }
    ]);