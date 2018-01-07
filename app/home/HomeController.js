/**
* HomeController is a controller that show Login screen
* @namespace StressRootModule
* @class HomeController
* @constructor
* @param $scope is angular scope
* @param CONSTANT is constant object
* @param LoginService is custom service used for login
*/

(function () {
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.controller('HomeController', homeHandler);

    homeHandler.$inject = ['$scope', 'HomeService', '$state', '$cookies'];

    function homeHandler($scope, HomeService, $state, $cookies) {
        var accessToken = $cookies.get('token');
        var userid = $cookies.get('user_id');

        $scope.logout = function () {
            HomeService.logout(accessToken, userid).then(function (response) {
                console.log("HomeController response");
                console.log(response.data.logout)
                if (response.data.logout) {
                    $cookies.remove("user_id");
                    $cookies.remove("email_id");
                    $cookies.remove("first_name");
                    $cookies.remove("last_name");
                    $cookies.remove("token");
                    $state.go('/login', {});
                }
            },
                function (error) {

                })
        }
    }
})();