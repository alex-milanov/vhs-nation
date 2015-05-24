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
				controller: 'CatalogueCtrl',
				templateUrl: '/states/home.html'
			})
			.state('login', {
				url : '/login',
				templateUrl: '/states/login.html'
			})
			.state('admin', {
				url : '/admin',
				templateUrl: '/states/admin/index.html',
				access: ["admin"]
			})
			.state('admin.users', {
				url : '/users',
				controller: 'AdminUsersCtrl',
				templateUrl: '/states/admin/users/index.html',
				access: ["admin"]
			})
			.state('admin.tapes', {
				url : '/tapes',
				controller: 'AdminTapesCtrl',
				templateUrl: '/states/admin/tapes/index.html',
				access: ["admin"]
			})
			.state('admin.categories', {
				url : '/categories',
				controller: 'AdminCategoriesCtrl',
				templateUrl: '/states/admin/categories/index.html',
				access: ["admin"]
			})

		$locationProvider.hashPrefix('!');

	}
]);