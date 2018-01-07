/**
     * Service level module of the Stress Management App.
     * 
     * @module serviceManager
     * @requires ui.router, ngCookies, ui.bootstrap
     */

(function(){
    'use strict';
    var StressRootModule = angular.module('StressRootModule');
    StressRootModule.factory('ServiceManager', serviceHandler);
    serviceHandler.$inject = [];

	/**
	 * This method is used for app configuration.
	 * @method serviceHandler
	 */
    function serviceHandler(){
        var serviceInterceptor = {
            request : function(config){
                // console.log('request Interceptor');
                // console.log(config);
                return config;
            },
            response: function(response){
                // console.log('response Interceptor');
                // console.log(response);
                return response;
            }
        }
        return serviceInterceptor;
    }

})();
