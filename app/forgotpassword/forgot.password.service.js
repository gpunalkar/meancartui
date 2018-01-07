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
    StressRootModule.service('ForgotPasswordService', forgotPasswordServiceHandler);

    //Login Service Injection
    forgotPasswordServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function forgotPasswordServiceHandler($http, CONSTANT, $q, __ENV) {
        var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.FORGOT_PASSWORD;
        this.resetPassword = function (email_id, isadmin) {
            alert(email_id);
            return $q(function (resolve, reject) {
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en'
                    }
                };
                var dataObject = {
                    "email_id": email_id,
                    "isadmin": isadmin
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    resolve(response);
                    alert('Reset Password Request Sent');
                }, function (err) {
                    reject(err);
                    alert('error');
                });
            });
        };

    }

})();