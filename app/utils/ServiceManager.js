(function(){
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.factory('ServiceManager', serviceHandler);
    
    serviceHandler.$inject = [];

    function serviceHandler()
    {
        var serviceInterceptor = {
            request: function(config) {
                console.log('config');
                console.log(config);
                return config;
            },
            response: function(response) {
                console.log('response');
                console.log(response);
                return response;
            }
        }

        return serviceInterceptor;
    }
})();