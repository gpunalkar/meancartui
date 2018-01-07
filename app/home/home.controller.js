/**
 * HomeController is a controller that show Login Page
 * @namespace StressRootModule
 * @class HomeController
 * @constructor
 * @param $scope is angular scope
 * @param $CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $rootScope is angular service which used access globle scope
 * @param HomeService is custom service use for Home Page
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    StressRootModule.controller('HomeController', homeHandler);

    homeHandler.$inject = ['$scope', 'CONSTANT', 'HomeService', '$cookies', '$state'];

    //Login Handler calls the Login Service and sends the required parameters
    function homeHandler($scope, CONSTANT, HomeService, $cookies, $state) {
        var userid = $cookies.get('userID');
        var accessToken = $cookies.get('userAuthToken');
        $scope.logout = function () {
            HomeService.logout(userid, accessToken).then(function (response) {
                if (response.data.logout) {
                    $cookies.remove('userID');
                    $cookies.remove('firstName');
                    $cookies.remove('lastName');
                    $cookies.remove('userAuthToken');
                    $state.go('login', {});
                    alert('Success');
                } else {
                    alert('User alreaddy logged in');
                }
            }, function (err) {

            });
        }
    }

})();