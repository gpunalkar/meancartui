/**
 * UserService is a service that is used by Forgot Password Page
 * @namespace StressRootModule
 * @class UserService
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
    StressRootModule.service('UserService', UserServiceHandler);

    //Login Service Injection
    UserServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function UserServiceHandler($http, CONSTANT, $q, __ENV) {

        // Get All Users
        this.getAllUsers = function (userid, accessToken, emailid) {
            var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.GET_ALL_USERS;            
            return $q(function (resolve, reject) {
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'userid': userid,
                        'accessToken': accessToken
                    }
                };
                var dataObject = {
                    "email_id": emailid
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    resolve(response.data.response);
                }, function (err) {
                    reject(err);
                });
            });
        };

        // Delete User
        this.deleteUser = function (_id, userid, accessToken) {
            var URL = __ENV.BASE_PATH + CONSTANT.END_POINTS.DELETE_USER;
            return $q(function (resolve, reject) {
                var options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'locale': 'en',
                        'userid': userid,
                        'accessToken': accessToken
                    }
                };
                var dataObject = {
                    "_id": _id
                };
                $http.post(URL, dataObject, options).then(function (response) {
                    console.log(response);
                    resolve(response.data);
                }, function (err) {
                    reject(err);
                });
            });
        };

    }
})();