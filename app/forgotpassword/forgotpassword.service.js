(function(){
    'user strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.service('ForgotPasswordService', forgotPasswordServiceHandler);

    forgotPasswordServiceHandler.$inject = ['$http','CONSTANT', '$q', '__ENV'];

/**
     * forgotPasswordServiceHandler is a service that show Admin dashboard
     * @namespace StressRootModule
     * @class forgotPasswordServiceHandler
     * @param $http is protocol
     * @param CONSTANT is angular CONSTANT
     */

    function forgotPasswordServiceHandler($http, CONSTANT, $q, __ENV){



    }
})();