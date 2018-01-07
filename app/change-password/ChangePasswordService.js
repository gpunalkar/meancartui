/**
* ChangePasswordService is a service for Login screen
* @namespace StressRootModule
* @class ChangePasswordService
* @constructor
* @param $http is a service object
* @param CONSTANT is constant object
* @param $q is a promise object
*/

(function(){
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.service('ChangePasswordService', changePasswordServiceHandler);
    
    changePasswordServiceHandler.$inject = ['$http','CONSTANT', '__ENV', '$q'];
    
    function changePasswordServiceHandler($http, CONSTANT, __ENV, $q)
    {
        console.log('changePasswordServiceHandler');

        this.matchPassword = function(oldPassword, newPassword, emailID, accessToken, userid)
        {
            return $q(function(resolve, reject){
                var url = __ENV.BASE_PATH + CONSTANT.END_POINTS.CHANGE_PASSWORD;
                var encryptedOldPassword = CryptoJS.AES.encrypt(oldPassword, CONSTANT.SECRET).toString();
                var encryptedNewPassword = CryptoJS.AES.encrypt(newPassword, CONSTANT.SECRET).toString();

                var dataObj = {
                    "email_id": emailID,
                    "oldpassword": encryptedOldPassword,
                    "password": encryptedNewPassword
                };
                var options = {
                    headers: {
                        "Content-Type": "application/json",
                        "locale": "en",
                        "accesstoken": accessToken,
                        "userid": userid
                    }
                };

                $http.post(url, dataObj, options).then(function(response){
                    
                    resolve(response.data.response);
                },
                function(error){
                    console.log('ChangePasswordService Error...')
                    reject(error);
                })
            })
        }
    }

})();