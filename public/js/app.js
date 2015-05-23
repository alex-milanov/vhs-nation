"use strict"

var app = angular.module('vhs-nation', [
	'ui.router',
	'ngResource',
	'ngCookies'
	]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
	function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url : '/',
				templateUrl: '/states/home.html'
			})
			.state('login', {
				url : '/login',
				templateUrl: '/states/login.html'
			})
			.state('admin', {
				url : '/admin',
				templateUrl: '/states/admin/index.html'
			})

		$locationProvider.hashPrefix('!');

	}
]);