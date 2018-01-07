(function(){
'use strict';
	var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('ForgotPasswordController', ForgotController);

    ForgotPasswordController.$inject=['$scope', 'CONSTANT',  '$cookies', '$state'];

/**
     * ForgotPasswordController is a controller that show Admin dashboard
     * @namespace StressRootModule
     * @class ForgotPasswordController
     * @constructor
     * @param $scope is angular scope
     * @param CONSTANT is angular CONSTANT
     * @param ForgotPasswordService is custom service use for logout functionality
     * @param cookies to store/get user data
     * @param $state for route
     */
    function ForgotPasswordController($scope, CONSTANT,  $cookies, $state) {


    }
})();