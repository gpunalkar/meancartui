/**
 * ModifyUserController is a controller that show Change Password Page
 * @namespace StressRootModule
 * @class ModifyUserController
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $rootScope is angular service which used access globle scope
 * @param ForgotPasswordService is custom service use for Forgot Password
 * 
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('ModifyUserController', ModifyUserHandler);

    ModifyUserHandler.$inject = ['$scope', 'CONSTANT', 'ModifyUserService', '$cookies', '$state', '$mdToast'];

    //Login Handler calls the Login Service and sends the required parameters
    function ModifyUserHandler($scope, CONSTANT, ModifyUserService, $cookies, $state, $mdToast) {
        var userid = $cookies.get('userID');
        var accessToken = $cookies.get('userAuthToken');
        if ($state.params.user) {
            $scope.id = $state.params.user._id;
            $scope.fname = $state.params.user.first_name;
            $scope.lname = $state.params.user.last_name;
            $scope.email = $state.params.user.email_id;
        }
        $scope.modifyUser = function () {
            var dataObject = {
                _id: $scope.id,
                first_name: $scope.fname,
                last_name: $scope.lname,
                email_id: $scope.email
            };
            ModifyUserService.modifyUser(dataObject, userid, accessToken).then(function (response) {
                if (response.data.success) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(CONSTANT.MESSAGES.USER_MODIFIED_SUCCESS)
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $state.go('home.users', {});
                }
            }, function (err) {
                console.log(err);
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(CONSTANT.MESSAGES.USER_MODIFIED_ERROR)
                        .position('top right')
                        .hideDelay(3000)
                );
            });
        };
    }

})();