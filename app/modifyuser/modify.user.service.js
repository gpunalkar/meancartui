/**
 * ModifyUserService is a service that is used by Change Password Page
 * @namespace StressRootModule
 * @class ModifyUserService
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
    StressRootModule.service('ModifyUserService', ModifyUserServiceHandler);

    //Login Service Injection
    ModifyUserServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function ModifyUserServiceHandler($http, CONSTANT, $q, __ENV) {
        var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.UPDATE_USER;
        //Validate User against database
        this.modifyUser = function (dataObject, userid, accessToken) {
            return $q(function (resolve, reject) {
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'userid': userid,
                        'accesstoken': accessToken
                    }
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    resolve(response);
                }, function (err) {
                    reject(err);
                    alert('error');
                });
            });
        };
    }

})();