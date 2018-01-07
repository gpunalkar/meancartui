/**
* ForgetPasswordController is a controller that allows user to change the password
* @namespace StressRootModule
* @class ForgetPasswordController
* @constructor
* @param $scope is angular scope
* @param CONSTANT is constant object
* @param LoginService is custom service used for login
*/

(function () {
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.controller('ForgetPasswordController', forgetPasswordHandler);

    forgetPasswordHandler.$inject = ['$scope'];

    function forgetPasswordHandler($scope) {
    }
})();