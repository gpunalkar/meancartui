/**
 * UserController is a controller that show Login Page
 * @namespace StressRootModule
 * @class UserController
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $rootScope is angular service which used access globle scope
 * @param UserService is custom service use for Forgot Password
 * 
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('UserController', UserHandler);

    UserHandler.$inject = ['$scope', 'CONSTANT', 'UserService', '$state', '$cookies', '$mdToast', 'PrintService', 'PDFService'];

    //Forgot Password Handler calls the Forgot Password Service
    function UserHandler($scope, CONSTANT, UserService, $state, $cookies, $mdToast, PrintService, PDFService) {
        $scope.users = null;
        var userid = $cookies.get('userID');
        var accessToken = $cookies.get('userAuthToken');
        var emailid = $cookies.get('emailId');
        $scope.getAllUsers = function () {
            UserService.getAllUsers(userid, accessToken, emailid).then(function (response) {
                // console.log(response);
                $scope.users = response.data;
            }, function (err) {
                console.log(err);
            });
        };
        $scope.deleteUser = function (_id) {
            UserService.deleteUser(_id, userid, accessToken).then(function (response) {
                console.log(response);
                if (response.success) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(CONSTANT.MESSAGES.DELETE_USER_SUCCESS)
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $scope.getAllUsers();
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(CONSTANT.MESSAGES.DELETE_USER_ERROR)
                            .position('top right')
                            .hideDelay(3000)
                    );
                }
            }, function (err) {
                console.log(err);
                alert('Error in Deleting user.');
            });
        };
        $scope.modifyUser = function (user) {
            $state.go('modifyuser', { 'user': user });
        };
        $scope.getTemplate = function (user) {
            return 'userdetails';
        };

        $scope.printDoc = function () {
            console.log('print');
            PrintService.printDoc($scope.users);
        };

        $scope.downloadPDFDoc = function () {
            console.log('pdf');
            PDFService.downloadPDFDoc($scope.users);
        };

        $scope.getAllUsers();
    }

})();