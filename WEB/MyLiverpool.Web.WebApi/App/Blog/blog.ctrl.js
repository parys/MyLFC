'use strict';
angular.module('blog.ctrl', [])
    .controller('BlogCtrl', [
        'BlogFactory', '$uibModal', '$rootScope', '$stateParams', '$state', 'BlogCategoryFactory', 'NewsCommentFactory', '$cookies', 'Authentication', '$scope',
        function (BlogFactory, $uibModal, $rootScope, $stateParams, $state, BlogCategoryFactory, NewsCommentFactory, $cookies, Authentication, $scope) {
            var vm = this;
            vm.items = [];
            vm.page = $stateParams.page;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.categoryId = Number($stateParams.categoryId);
            vm.userName = $stateParams.userName !== undefined ? $stateParams.userName : '';
            vm.categories = [];
            vm.item = {
                id: undefined,
                title: undefined,
                brief: undefined,
                message: undefined,
                source: undefined,
                photoPath: undefined,
                canCommentary: undefined,
                onTop: undefined,
                pending: undefined,
                newsCategoryId: ''
            };
            vm.newComment = undefined;

            function resetNewComment() {
                vm.newComment = {
                    id: undefined,
                    message: undefined,
                    parentId: undefined,
                    newsItemId: undefined,
                    authorId: undefined,
                    authorUserName: undefined,
                    answer: undefined
                };
            }

            vm.initList = function () {
                BlogFactory.getList(vm.page, vm.categoryId, vm.userName)
                    .then(function (response) {
                        vm.items = response.list;
                        vm.pageNo = response.pageNo;
                        vm.totalItems = response.totalItems;
                        vm.itemPerPage = response.itemPerPage;
                    },
                        function (response) {
                            //.f = "";
                        });
                if (vm.page !== undefined) {
                    vm.updateCategories(false);
                }
            };

            vm.filterByUserName = function () {
                $stateParams.userName = vm.userName;
                vm.filter();
            };

            vm.changeCategoryId = function () {
                $stateParams.categoryId = vm.categoryId;
                vm.filter();
            };

            vm.filter = function () {
                $state.go('blog', { page: vm.page, categoryId: vm.categoryId, userName: vm.userName }, { reload: true });
            };

            vm.activate = function (index) {
                BlogFactory.activate(vm.items[index].id).
                    then(function (response) {
                        if (response) {
                            vm.items[index].pending = false;
                            $rootScope.alerts.push({ type: 'success', msg: 'Blog успешно активирована.' });
                        }
                    },
                        function (response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Blog не была активирована.' });
                        });
            };

            vm.delete = function (index) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'modalDeleteConfirmation.html',
                    controller: 'ModalCtrl',
                    controllerAs: 'vm'
                    //resolve: {
                    //    id: function() {
                    //        return $scoe.selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function () {
                    BlogFactory.delete(vm.items[index].id).
                        then(function (response) {
                            if (response) {
                                vm.items.splice(index, 1);
                                $rootScope.alerts.push({ type: 'success', msg: 'Blog успешно удалена.' });
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Blog не была удалена.' });
                            });
                }, function () {
                });
            };

            vm.goToPage = function () {
                $state.go('news', { page: vm.page });
            };

            vm.initEdit = function () {
                if ($stateParams.id) {
                    BlogFactory.getItem($stateParams.id)
                        .then(function (response) {
                            vm.item = response;
                        },
                            function (response) {
                                //vm.f = "";
                            });
                }
                vm.updateCategories(true);
            };

            vm.updateCategories = function (isEdit) {
                BlogCategoryFactory.getList()
                    .then(function (response) {
                        vm.categories = response;
                        if (!isEdit) {
                            vm.categories.push({ name: 'Все категории', id: NaN });
                        }
                    },
                        function (response) {
                            //vm.f = "";
                        });
            };

            vm.save = function () {
                if (!vm.item.id) {
                    BlogFactory.create(vm.item)
                        .then(function (response) {
                            if (response) {
                                $rootScope.alerts.push({ type: 'success', msg: 'Blog успешно создана.' });
                                $state.go('news');
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Blog не была добавлена.' });
                            });
                } else {
                    BlogFactory.edit(vm.item)
                        .then(function (response) {
                            if (response) {
                                $rootScope.alerts.push({ type: 'success', msg: 'Blog успешно отредактирована.' });
                                $state.go('newsInfo', { id: vm.item.id });
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Blog не была отредактирована.' });
                            });
                }
            };

            function tryAddNewsRead() {
                var cookieName = 'Blog' + vm.item.id;
                if ($cookies.get(cookieName) === undefined) {
                    BlogFactory.addView(vm.item.id)
                        .then(function (response) {
                            $cookies.put(cookieName, 0);
                            vm.item.reads += 1;
                        },
                            function (response) {

                            });
                }
            }

            vm.init = function () {
                resetNewComment();
                BlogFactory.getItem()
                    .then(function (response) {
                        if (response.pending && !Authentication.isEditor()) { //todo author??
                            $state.go('home');
                        } else {
                            vm.item = response;
                            $rootScope.$title = response.title;
                            tryAddNewsRead();
                        }
                    },
                        function (response) {
                            //.f = "";
                        });
            };

            vm.activate = function () {
                BlogFactory.activate(vm.item.id).
                    then(function (response) {
                        if (response) {
                            vm.item.pending = false;
                            $rootScope.alerts.push({ type: 'success', msg: 'Blog успешно активирована.' });
                        }
                    },
                        function (response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Blog не была активирована.' });
                        });
            };

            vm.delete = function () {
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

                modalInstance.result.then(function () {
                    BlogFactory.delete(vm.item.id).
                        then(function (response) {
                            if (response) {
                                $rootScope.alerts.push({ type: 'success', msg: 'Blog успешно удалена.' });
                                $state.go('home');
                            }
                        },
                            function (response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Blog не была удалена.' });
                            });
                }, function () {
                });
            };

            vm.addComment = function () {
                vm.newComment.newsItemId = vm.item.id;
                NewsCommentFactory.add(vm.newComment).
                    then(function (response) {
                        //todo 
                        vm.newComment = response;
                        vm.item.comments.push(vm.newComment);
                        resetNewComment();
                    },
                        function (response) {
                            console.log('NOT added');
                        });
            };


            $scope.$on('deleteCommentConfirmed', function (event, data) {
                console.log(data);
                var comments = vm.item.comments;
                console.log(comments);
                console.log(comments.indexOf(data));
                comments.splice(comments.indexOf(data), 1);
            });

            $scope.$on('editCommentConfirmed', function (event, data) {
                var comments = vm.item.comments;
                comments[comments.indexOf(data)] = data;
            });
        }
    ]);