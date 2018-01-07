/**
 * AddUserController is a controller that show Change Password Page
 * @namespace StressRootModule
 * @class AddUserController
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $rootScope is angular service which used access globle scope
 * @param ForgotPasswordService is custom service use for Forgot Password
 * 
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('AddUserController', AddUserHandler);

    AddUserHandler.$inject = ['$scope', 'CONSTANT', 'AddUserService', '$cookies', '$state','$mdToast'];

    //Login Handler calls the Login Service and sends the required parameters
    function AddUserHandler($scope, CONSTANT, AddUserService, $cookies, $state, $mdToast) {
        var userid = $cookies.get('userID');
        var accessToken = $cookies.get('userAuthToken');
        $scope.addUser = function () {
            var dataObject = {
                first_name: $scope.fname,
                last_name: $scope.lname,
                email_id: $scope.email,
                isactive: $scope.isactive,
                isadmin: true,
                isnew: true
            };
            AddUserService.addUser(dataObject, userid, accessToken).then(function (response) {
                if (response.data) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(CONSTANT.MESSAGES.USER_ADD_SUCCESS)
                            .position('top right')
                            .hideDelay(3000)
                    );
                    $state.go('home.users', {});
                }
            }, function (err) {
                console.log(err);
            });
        };
    }

})();