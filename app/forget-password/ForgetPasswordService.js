/**
* ForgetPasswordService is a service for Login screen
* @namespace StressRootModule
* @class ForgetPasswordService
* @constructor
* @param $http is a service object
* @param CONSTANT is constant object
* @param $q is a promise object
*/

(function(){
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.service('ForgetPasswordService', forgetPasswordServiceHandler);
    
    forgetPasswordServiceHandler.$inject = ['$http','CONSTANT', '__ENV', '$q'];
    
    function forgetPasswordServiceHandler($http, CONSTANT, __ENV, $q)
    {
        console.log('forgetPasswordServiceHandler');
    }

})();