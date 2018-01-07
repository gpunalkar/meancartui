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
    StressRootModule.service('LoginService', loginServiceHandler);
    
    loginServiceHandler.$inject = ['$http','CONSTANT','__ENV', '$q'];
    
    function loginServiceHandler($http, CONSTANT, __ENV, $q)
    {
        console.log('loginServiceHandler');
        this.validateUser = function(username, password, isadmin)
        {
            return $q(function (resolve, reject){
                var url = __ENV.BASE_PATH + CONSTANT.END_POINTS.LOGIN;
                console.log(password);
                var encryptedPassword = CryptoJS.AES.encrypt(password, CONSTANT.SECRET).toString();

                console.log(encryptedPassword);
                console.log(url);
                var dataObj = {
                    "email_id": username,
                    "password": encryptedPassword,
                    "isadmin": isadmin
                };
                var options = {
                    headers: {
                        "Content-Type": "application/json",
                        "locale": "en"
                    }
                };

                $http.post(url, dataObj, options).then(function(response){
                    if (response.data.success)
                    {
                        resolve(response.data.response);
                    }
                    else
                    {
                        reject(response.data.response);
                    }
                },
                function(error){
                    console.log('validateUser error');
                    reject(error);
                })
            })
        }
    }

})();