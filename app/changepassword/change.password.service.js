/**
 * ChangePasswordService is a service that is used by Change Password Page
 * @namespace StressRootModule
 * @class ChangePasswordService
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
    StressRootModule.service('ChangePasswordService', changePasswordServiceHandler);

    //Login Service Injection
    changePasswordServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function changePasswordServiceHandler($http, CONSTANT, $q, __ENV) {
        var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.CHANGE_PASSWORD;
        //Validate User against database
        this.changePassword = function (oldpassword, password, userid, email_id, accessToken) {
            return $q(function (resolve, reject) {
                var oldEncryptedPassword = CryptoJS.AES.encrypt(oldpassword, CONSTANT.SECRET).toString();
                var newEncryptedPassword = CryptoJS.AES.encrypt(password, CONSTANT.SECRET).toString();
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'accesstoken': accessToken,
                        'userid': userid
                    }
                };
                var dataObject = {
                    "email_id": email_id,
                    "oldpassword": oldEncryptedPassword,
                    "password": newEncryptedPassword
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    resolve(response);
                    alert('Success');
                }, function (err) {
                    reject(err);
                    alert('error');
                });
            });
        };
    }

})();