/**
 * LoginController is a controller that show Login Page
 * @namespace StressRootModule
 * @class LoginService
 * @constructor
 * @param $scope is angular scope
 * @param CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $http is angular service for ajax/http calls
 * @param $q is angular service which creates a promise
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    //Login Service using the loginServiceHandler
    StressRootModule.service('LoginService', loginServiceHandler);

    //Login Service Injection
    loginServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function loginServiceHandler($http, CONSTANT, $q, __ENV) {
        var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.LOGIN;
        var options = {
            headers: {
                'Content-Type': 'application/json',
                'locale': 'en'
            }
        };

        //Validate User against database
        this.validateUser = function (email, pwd, admin) {
            return $q(function (resolve, reject) {
                var encryptedPassword = CryptoJS.AES.encrypt(pwd, CONSTANT.SECRET).toString();
                var dataObject = {
                    "email_id": email,
                    "password": encryptedPassword,
                    "isadmin": admin
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    if (response.data.success) {
                        resolve(response);
                        alert('Success');
                    } else {
                        reject(response);
                        alert('Fail');
                    }
                }, function (err) {
                    alert('error');
                });
            });
        };
    }

})();