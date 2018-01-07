/**
 * Top level module of the Stress management App.
 * 
 * @module StressRootModule
 * @requires ui.router, ngCookies, ngMaterial
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule', ['ui.router', 'EnvConfigModule', 'ngMaterial', 'ngCookies', 'md.data.table']);
    StressRootModule.config(configHandler);
    StressRootModule.run(runHandler); //Check cookies //Run before every route change

    configHandler.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];
    runHandler.$inject = [];

    function configHandler($httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: './app/login/login.html',
            controller: 'LoginController'
        }).state('home', {
            url: '/home',
            templateUrl: './app/home/home.html',
            controller: 'HomeController'
        }).state('changepassword', {
            url: '/changepassword',
            templateUrl: './app/changepassword/change.password.html',
            controller: 'ChangePasswordController'
        }).state('forgotpassword', {
            url: '/forgotpassword',
            templateUrl: './app/forgotpassword/forgot.password.html',
            controller: 'ForgotPasswordController'
        }).state('/resetpassword?id?tk', {
            title: 'Reset Password',
            url: '/resetpassword?id?tk',
            isAuthentication: 'false',
            templateUrl: 'app/resetPassword/reset.password.html',
            controller: 'ResetPasswordController'
        }).state('home.users', {
            url: '/manage-users',
            templateUrl: './app/user/user.html',
            controller: 'UserController'
        }).state('adduser', {
            url: '/adduser',
            templateUrl: './app/adduser/add.user.html',
            controller: 'AddUserController'
        }).state('modifyuser', {
            url: '/modifyuser',
            templateUrl: './app/modifyuser/modify.user.html',
            controller: 'ModifyUserController',
            params: {user: null}
        });
        $urlRouterProvider.otherwise('/login');

        // Register Angular Material Theme
        $mdThemingProvider.theme('altTheme').primaryPalette('pink').accentPalette('orange');

        // Interceptors
        $httpProvider.interceptors.push('ServiceManager');
    }
    function runHandler() {
        // console.log('runHandler');
    }
})();