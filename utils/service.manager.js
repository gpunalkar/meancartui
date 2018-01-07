/**
 * Service Handler is an interceptor file
 * @namespace StressRootModule
 * @class ServiceManager
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param ServiceManager is custom service used as a interceptor
 */
(function(){
    'use strict';
    // Project Module Name: StressModule
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.factory('ServiceManager', serviceHandler);

    serviceHandler.$inject = [];

    //Service Manager Handler using the serviceHandler 
    function serviceHandler() {
        var serviceInterceptor = {
            request : function(config) {
                // console.log(config);
                // console.log('Config from Login Service');
                return config;
            },
            response : function(response) {
                // console.log(response);
                // console.log('Response from Login Service');
                return response;
            }
        }
        return serviceInterceptor
    }    
})();