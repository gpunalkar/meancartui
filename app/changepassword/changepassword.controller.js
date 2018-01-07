(function(){
'use strict';
	var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('ChangePasswordController', ChangePasswordController);

    ChangePasswordController.$inject=['$scope', 'CONSTANT', '$cookies', '$state'];

/**
     * ChangePasswordController is a controller that show Admin dashboard
     * @namespace StressRootModule
     * @class ChangePasswordController
     * @constructor
     * @param $scope is angular scope
     * @param CONSTANT is angular CONSTANT
     * @param ChangePasswordService is custom service use for logout functionality
     * @param cookies to store/get user data
     * @param $state for route
     */
    function ChangePasswordController($scope, CONSTANT,  $cookies, $state) {


    }
})();