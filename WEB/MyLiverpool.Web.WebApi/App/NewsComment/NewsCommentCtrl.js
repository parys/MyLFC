'use strict';
angular.module('newsComment.ctrl', [])
    .controller('NewsCommentCtrl', [
        '$scope', '$uibModal', 'NewsCommentsFactory', 'Authentication', '$rootScope',
        function($scope, $uibModal, NewsCommentsFactory, Authentication, $rootScope) {
            var vm = this;

            vm.newComment = undefined;

            function resetNewComment() {
                vm.newComment = {
                    id: undefined,
                    message: undefined,
                    parentId: undefined,
                    newsItemId: undefined,
                    authorId: undefined,
                    authorUserName: undefined,
                    answer: undefined,
                }
            }

            resetNewComment();

            function findWithAttr(array, attr, value) {
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i][attr] === value) {
                        return i;
                    }
                }
                return -1;
            };

            vm.addReplyComment = function (comment) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalEditComment.html',
                    controller: 'ModalEditCommentCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        editingComment: function() {
                            return vm.newComment;
                        }
                    }
                });

                modalInstance.result.then(function() {
                    vm.newComment.newsItemId = comment.newsItemId;
                    vm.newComment.parentId = comment.id;
                    NewsCommentsFactory.add(vm.newComment).
                        then(function(response) {
                                if (response) {
                                    comment.children.push(response);
                                   // $scope.$emit('editCommentConfirmed', editedComment);
                                    $rootScope.alerts.push({ type: 'success', msg: 'Комментарий успешно измененен.' });
                                    //    $state.go('home');
                                    resetNewComment();

                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Комментарий не был измененен.' });
                            });
                }, function() {
                });
            }

            vm.editComment = function (comment) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalEditComment.html',
                    controller: 'ModalEditCommentCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        editingComment: function() {
                            return comment;
                        }
                    }
                });

                modalInstance.result.then(function() {
                    NewsCommentsFactory.edit(comment).
                        then(function(response) {
                                if (response) {
                                    $scope.$emit('editCommentConfirmed', editedComment);
                                    $rootScope.alerts.push({ type: 'success', msg: 'Комментарий успешно измененен.' });
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Комментарий не был измененен.' });
                            });
                }, function() {
                });
            }

            vm.deleteComment = function(comment) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalDeleteConfirmation.html',
                    controller: 'ModalCtrl',
                    controllerAs: 'vm'
                    //resolve: {
                    //    id: function() {
                    //        return $scope.selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function() {
                    NewsCommentsFactory.delete(comment.id).
                        then(function(response) {
                                if (response) {
                                    $rootScope.alerts.push({ type: 'success', msg: 'Комментарий успешно удален.' });
                                    $scope.$emit('deleteCommentConfirmed', comment);
                                    //var index = findWithAttr($scope.item.comments, 'id', id);
                                    //$scope.item.comments.splice(index, 1);
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Комментарий не был удалена.' });
                            });
                }, function() {
                });
            }

            vm.getUserId = function () {
                return Authentication.getUserId();
            }

            vm.canAddReply = function () {
                return Authentication.exists(); //todo && !vm.isUserAuthor();
            }
        }
    ]);