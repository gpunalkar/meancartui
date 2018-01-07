/**
* LoginController is a controller that show Login screen
* @namespace StressRootModule
* @class LoginController
* @constructor
* @param $scope is angular scope
* @param CONSTANT is constant object
* @param LoginService is custom service used for login
*/

(function(){
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    StressRootModule.controller('LoginController', loginHandler);
    loginHandler.$inject = ['$scope', 'CONSTANT', 'LoginService', '$cookies', '$state'];

    function loginHandler($scope, CONSTANT, LoginService, $cookies, $state)
    {
        const isadmin = true; //since we dont need this to be changed in configuration or to keep it private..define it in controller.

        $scope.validateCredentials = function()
        {
            console.log('validateCredentials');
             LoginService.validateUser($scope.username, $scope.password, isadmin).then(function(response){
                console.log('response.data');
                console.log(response.data._id);
                $cookies.put("user_id", response.data._id);
                $cookies.put("email_id", response.data.email_id);
                $cookies.put("first_name", response.data.first_name);
                $cookies.put("last_name", response.data.last_name);
                $cookies.put("token", response.data.token);
                console.log($cookies.get('token'));
                
                $state.go('/home', {});
                
             },
             function(error){
                console.log(error);
             });
        }
        console.log('LoginController');
    }

})();