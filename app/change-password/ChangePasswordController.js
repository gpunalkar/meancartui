/**
* ChangePasswordController is a controller that allows user to change the password
* @namespace StressRootModule
* @class ChangePasswordController
* @constructor
* @param $scope is angular scope
* @param CONSTANT is constant object
* @param LoginService is custom service used for login
*/

(function () {
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.controller('ChangePasswordController', changePasswordHandler);

    changePasswordHandler.$inject = ['$scope', 'ChangePasswordService', '$cookies'];

    function changePasswordHandler($scope, ChangePasswordService, $cookies) {

        $scope.changePassword = function(){
            var emaildID = $cookies.get("email_id");
            var userID = $cookies.get("user_id");
            var token = $cookies.get("token");

            ChangePasswordService.matchPassword($scope.oldPassword, $scope.newPassword, emaildID, token, userID).then(function(response){

            },
            function(error){

            });
            
        }
    }
})();