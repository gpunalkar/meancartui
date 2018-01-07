/**
     * Top level module of the Stress management App.
     * 
     * @module StressRootModule
     * @requires ui.router, ngCookies, ui.bootstrap
     */
(function(){
	'use strict';
	
	var StressRootModule = angular.module('StressRootModule', ['ui.router', 'EnvConfigModule', 'ngCookies']);

	StressRootModule.config(configHandler);
	StressRootModule.run(runHandler);

	configHandler.$inject = ['$httpProvider', '$stateProvider','$urlRouterProvider' ];
	runHandler.$inject = [ ];
	// console.log('ttttttttttttttttttt');

	/**
	 * This method is used for app configuration.
	 * @method configHandler
	 * @param {object} $httpProvider It is the Object passed to use $httpProvider.
	 * @param {object} $stateProvider It is the Object passed to use $stateProvider.
	 * @param {object} $urlRouterProvider It is the Object passed to use $urlRouterProvider.
	 */
	function configHandler($httpProvider, $stateProvider, $urlRouterProvider){

		// To define interceptor
		$httpProvider.interceptors.push('ServiceManager');
		// console.log('in configHandler');
		$urlRouterProvider.otherwise('/login');

		$stateProvider.state('login', {
			'url': '/login',
			'templateUrl': 'app/login/login.html',
			'controller' : 'LoginController'
		}).state('home', {
			'url': '/home',
			'templateUrl': 'app/home/home.html',
			'controller' : 'HomeController'
		}).state('changepassword', {
			'url': '/changepassword',
			'templateUrl': 'app/changepassword/changepassword.html',
			'controller' : 'ChangePasswordController'
		}).state('forgotpassword', {
			'url': '/forgotpassword',
			'templateUrl': 'app/forgotpassword/forgotpassword.html',
			'controller' : 'ForgotPasswordController'
		});
	}

	/**
	 * This method is used for app configuration.
	 * @method runHandler
	 */
	function runHandler(){
//		console.log('in runHandler');
	}

	// StressRootModule.controller('myController', ['$scope', function($scope) {
	// 	$scope.test = "Testing";
	// }]);

})();