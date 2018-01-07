/**
* LoginService is a service for Login screen
* @namespace StressRootModule
* @class LoginService
* @constructor
* @param $http is a service object
* @param CONSTANT is constant object
* @param $q is a promise object
*/

(function(){
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.service('HomeService', homeServiceHandler);
    
    homeServiceHandler.$inject = ['$http','CONSTANT', '__ENV', '$q'];
    
    function homeServiceHandler($http, CONSTANT, __ENV, $q)
    {
        console.log('homeServiceHandler');
        this.logout = function(accessToken, userid)
        {
             return $q(function (resolve, reject){
                var url = __ENV.BASE_PATH + CONSTANT.END_POINTS.LOGOUT;

                var dataObj = {};
                var options = {
                    headers: {
                        "Content-Type": "application/json",
                        "locale": "en",
                        "accesstoken": accessToken,
                        "userid": userid
                    }
                };

                 $http.get(url, options).then(function(response){
                     console.log("HomeService response");
                     console.log(response)
                     resolve(response.data.response); 
                 },
                 function(error){
                    reject(error);
                 })
             })
        }
    }

})();