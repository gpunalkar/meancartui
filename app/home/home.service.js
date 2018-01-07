/**
 * HomeService is a service required on Home Page
 * @namespace StressRootModule
 * @class HomeService
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
    StressRootModule.service('HomeService', homeServiceHandler);

    //Login Service Injection
    homeServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV', '$state'];

    //Login Service Handler using the loginServiceHandler    
    function homeServiceHandler($http, CONSTANT, $q, __ENV, $state) {
        this.logout = function (userid, accessToken) {
            return $q(function (resolve, reject) {
                var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.LOGOUT;
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'accessToken': accessToken,
                        'userid': userid
                    }
                };
                $http.get(URL, options).then(function (response) {
                    resolve(response.data.response);
                    alert('Success');
                }, function (err) {
                    reject(response.data.response);
                    alert('error');
                });
            });
        }
    }

})();