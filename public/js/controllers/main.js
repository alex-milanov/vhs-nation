'use strict'

app.controller('MainCtrl', function ($scope, $state, Auth) {

	$scope.$state = $state;

	$scope.userData = {};

	$scope.loggedIn = function(){
		return Auth.loggedIn();
	}

	$scope.login = function(user){
		Auth.login(user).then(function(){
			$state.go("admin");
			$scope.userData = Auth.getUserData();
		});
	}

	$scope.register = function(user){
		Auth.register(user).then(function(){
			$state.go("home");
		});
	}

	$scope.logout = function(){
		Auth.logout().then(function(){
			$state.go("home");
			$scope.userData = {};
		});
	}

});