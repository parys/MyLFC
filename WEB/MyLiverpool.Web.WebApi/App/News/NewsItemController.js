﻿'use strict';
angular.module('liverpoolApp')
    .controller('NewsItemController', [
        'NewsFactory', '$uibModal', 'NewsCommentsFactory', '$state', '$cookies', 'Authentication',
        function (NewsFactory, $uibModal, NewsCommentsFactory, $state, $cookies, Authentication) {
            var vm = this;
            vm.item = [];

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

            function tryAddNewsRead() {
                var cookieName = 'news' + vm.item.id;
                if ($cookies.get(cookieName) == undefined) {
                    NewsFactory.addView(vm.item.id)
                        .then(function(response) {
                                $cookies.put(cookieName, 0);
                                vm.item.reads += 1;
                            },
                            function(response) {

                            });
                }
            }

            vm.init = function() {
                resetNewComment();
                NewsFactory.getItem()
                    .then(function(response) {
                            if (response.pending && !Authentication.isEditor()) {
                                $state.go('home');
                            } else {
                                vm.item = response;
                                tryAddNewsRead();
                            }
                        },
                        function(response) {
                            //.f = "";
                        });
            };

            vm.activate = function() {
                NewsFactory.activate(vm.id).
                    then(function(response) {
                            if (response) {
                                vm.newsItems[index].pending = false;
                                $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно активирована.' });
                            }
                        },
                        function(response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была активирована.' });
                        });
            }

            //$scope.isUserAuthor = function (userId, newsUserId) {
            //    console.log('isUserAuthor + NewsItemController');
            //    return userId == newsUserId;
            //}

            vm.delete = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalDeleteConfirmation.html',
                    controller: 'ModalCtrl',
                    controllerAs: 'vm'
                    //resolve: {
                    //    id: function() {
                    //        return .selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function() {
                    NewsFactory.delete(vm.item.id).
                        then(function(response) {
                                if (response) {
                                    // $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                                    $state.go('home');
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                            });
                }, function() {
                });
            }

            vm.addComment = function() {
                vm.newComment.newsItemId = vm.item.id;
                NewsCommentsFactory.add(vm.newComment).
                    then(function(response) {
                            //todo 

                            vm.newComment = response;
                            // .newComment.authorId = 1;
                            //  .newComment.authorUserName = 'adminka';
                            vm.item.comments.push(vm.newComment);
                            resetNewComment();
                        },
                        function(response) {
                            console.log('NOT added');
                        });
            }


            vm.$on('deleteCommentConfirmed', function(event, data) {
              //  console.log('del  ' + .item.comments);
                var comments = vm.item.comments;
                comments.splice(comments.indexOf(data), 1);
            });

            //.$on('editCommentConfirmed', function(event, data) {
            //    console.log('edit ' + .item.comments);
            //    var comments = .item.comments;
            //    comments[comments.indexOf(data)] = data;
            //});
        }
    ]);