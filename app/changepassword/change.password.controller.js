/**
 * ChangePasswordController is a controller that show Change Password Page
 * @namespace StressRootModule
 * @class ChangePasswordController
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

    StressRootModule.controller('ChangePasswordController', changePasswordHandler);

    changePasswordHandler.$inject = ['$scope', 'CONSTANT', 'ChangePasswordService', '$cookies', '$state'];

    //Login Handler calls the Login Service and sends the required parameters
    function changePasswordHandler($scope, CONSTANT, ChangePasswordService, $cookies, $state) {
        var oldpassword = $scope.oldPassword;
        var password = $scope.newPassword;
        var userid = $cookies.get('userID');
        var email_id = $cookies.get('emailId');
        var accesstoken = $cookies.get('userAuthToken');
        $scope.changePassword = function () {
            ChangePasswordService.changePassword($scope.oldPassword, $scope.newPassword, userid, email_id, accesstoken).then(function (response) {
                if (response) {
                    $cookies.remove('userID');
                    $cookies.remove('firstName');
                    $cookies.remove('lastName');
                    $cookies.remove('userAuthToken');
                    $state.go('login', {});
                    alert('Success');
                }
            }, function (err) {

            });
        }
    }

})();