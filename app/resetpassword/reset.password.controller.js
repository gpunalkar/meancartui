/**
 * ResetPasswordController is a controller that show Login Page
 * @namespace StressRootModule
 * @class ResetPasswordController
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $rootScope is angular service which used access globle scope
 * @param ResetPasswordService is custom service use for Forgot Password
 * 
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('ResetPasswordController', resetPasswordHandler);

    resetPasswordHandler.$inject = ['$scope', 'ResetPasswordService', '$state', '$stateParams'];

    //Forgot Password Handler calls the Forgot Password Service
    function resetPasswordHandler($scope, ResetPasswordService, $state, $stateParams) {
        $scope.validateUserResponse = null;
        $scope.validateUserId = function () {
            console.log($stateParams);
            ResetPasswordService.validateUserId($stateParams).then(function (response) {
                if (response) {
                    $scope.validateUserResponse = response.data.response;
                }
            }, function (err) {
                console.log(err);
            });
        }
        $scope.validateUserId();
        $scope.resetPassword = function () {
            console.log($scope.validateUserResponse);
            console.log('$scope.validateUserResponse');
            var emailid = $scope.validateUserResponse.data.email_id;
            var password = $scope.password;
            ResetPasswordService.resetPassword($stateParams, emailid, password).then(function (response) {
                if (response) {
                    $state.go('login', {});
                }
            }, function (err) {
                console.log(err);
            });
        }
    }

})();