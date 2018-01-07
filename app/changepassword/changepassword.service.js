(function(){
    'user strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.service('ChangePasswordService', changePasswordServiceHandler);

    changePasswordServiceHandler.$inject = ['$http','CONSTANT', '$q', '__ENV'];

/**
     * changePasswordServiceHandler is a service that show Admin dashboard
     * @namespace StressRootModule
     * @class changePasswordServiceHandler
     * @param $http is protocol
     * @param CONSTANT is angular CONSTANT
     */

    function changePasswordServiceHandler($http, CONSTANT, $q, __ENV){



    }
})();