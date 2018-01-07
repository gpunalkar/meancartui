/**
 * ForgotPasswordService is a service that is used by Forgot Password Page
 * @namespace StressRootModule
 * @class ForgotPasswordService
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
    StressRootModule.service('ResetPasswordService', resetPasswordServiceHandler);

    //Login Service Injection
    resetPasswordServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function resetPasswordServiceHandler($http, CONSTANT, $q, __ENV) {

        this.validateUserId = function (params) {
            var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.GET_USER_BY_ID;
             return $q(function (resolve, reject) {
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'userid': params.id,
                        'accesstoken': params.tk
                    }
                };
                var dataObject = {
                    "_id": params.id
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    resolve(response);
                }, function (err) {
                    reject(err);
                });
            });
        };

        this.resetPassword = function (params, email, password) {
            var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.RESET_PASSWORD_BY_LINK;
             return $q(function (resolve, reject) {
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'userid': params.id,
                        'accesstoken': params.tk
                    }
                };
                var dataObject = {
                    "email_id": email,
                    "password": password,
                    "tk": params.tk,
                    "id": params.id
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    console.log(response);
                    resolve(response);
                    alert('Reset Password Request Sent');
                }, function (err) {
                    console.log(err);
                    reject(err);
                    alert('error');
                });
            });
        };

    }

})();