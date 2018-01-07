/**
 * ForgotPasswordController is a controller that show Login Page
 * @namespace StressRootModule
 * @class ForgotPasswordController
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

    StressRootModule.controller('ForgotPasswordController', forgotPasswordHandler);

    forgotPasswordHandler.$inject = ['$scope', 'ForgotPasswordService', '$state'];

    //Forgot Password Handler calls the Forgot Password Service
    function forgotPasswordHandler($scope, ForgotPasswordService, $state) {
        $scope.resetPassword = function () {
            console.log($scope.resetEmail);
            var email_id = $scope.resetEmail;
            $scope.admin = true;
            ForgotPasswordService.resetPassword(email_id,$scope.admin).then(function (response) {
                if (response) {
                    $state.go('login', {});
                }
            }, function (err) {
                console.log(err);
            });
        }
    }

})();