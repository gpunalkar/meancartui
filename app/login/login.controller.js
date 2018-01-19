/**
 * LoginController is a controller that show Login Page
 * @namespace StressRootModule
 * @class LoginController
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $rootScope is angular service which used access globle scope
 * @param LoginService is custom service use for login
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('LoginController', loginHandler);

    loginHandler.$inject = ['$scope', 'CONSTANT', 'LoginService', '$cookies', '$state'];

    //Login Handler calls the Login Service and sends the required parameters
    function loginHandler($scope, CONSTANT, LoginService, $cookies, $state) {
        $scope.validateCrendentials = function () {
            LoginService.validateUser($scope.email, $scope.password, $scope.isadmin).then(function (resp) {
                //Set Cookie
                console.log(resp);
                var userAuthorization = {
                    userId: resp.data.response.data._id,
                    firstName: resp.data.response.data.first_name,
                    lastName: resp.data.response.data.last_name,
                    userAuthToken: resp.data.response.data.token,
                    emailId: resp.data.response.data.email_id
                };
                
                $cookies.put('userID', userAuthorization.userId);
                $cookies.put('firstName', userAuthorization.firstName);
                $cookies.put('lastName', userAuthorization.lastName);
                $cookies.put('userAuthToken', userAuthorization.userAuthToken);
                $cookies.put('emailId', userAuthorization.emailId);

                // $cookies.putObject('Authorization', userAuthorization);

                // alert($cookies.get('userID'));
                // console.log($cookies.get('userID'))

                // alert($cookies.get('firstName'));
                // console.log($cookies.get('firstName'))

                // alert($cookies.get('lastName'));
                // console.log($cookies.get('lastName'))

                // alert($cookies.get('userAuthToken'));
                // console.log($cookies.get('userAuthToken'))

                $state.go('home.users', {});

            }, function (err) {
                console.log(err);
            });
        };
    }

})();